<template>
  <div><h1 id=wire-protocol>Wire Protocol</h1>
<p>The <a href=https://github.com/tendermint/tendermint/tree/master/wire>Tendermint wire protocol</a> encodes data in <a href=#binary>c-style binary</a> and <a href=#json>JSON</a> form.</p>
<h2 id=supported-types>Supported types</h2>
<ul>
<li>Primitive types
<ul>
<li><code>uint8</code> (aka <code>byte</code>), <code>uint16</code>, <code>uint32</code>, <code>uint64</code></li>
<li><code>int8</code>, <code>int16</code>, <code>int32</code>, <code>int64</code></li>
<li><code>uint</code>, <code>int</code>: variable length (un)signed integers</li>
<li><code>string</code>, <code>[]byte</code></li>
<li><code>time</code></li>
</ul>
</li>
<li>Derived types
<ul>
<li>structs</li>
<li>var-length arrays of a particular type</li>
<li>fixed-length arrays of a particular type</li>
<li>interfaces: registered union types preceded by a <code>type byte</code></li>
<li>pointers</li>
</ul>
</li>
</ul>
<h2 id=binary>Binary</h2>
<p><strong>Fixed-length primitive types</strong> are encoded with 1,2,3, or 4 big-endian bytes.</p>
<ul>
<li><code>uint8</code> (aka <code>byte</code>), <code>uint16</code>, <code>uint32</code>, <code>uint64</code>: takes 1,2,3, and 4 bytes respectively</li>
<li><code>int8</code>, <code>int16</code>, <code>int32</code>, <code>int64</code>: takes 1,2,3, and 4 bytes respectively</li>
<li><code>time</code>: <code>int64</code> representation of nanoseconds since epoch</li>
</ul>
<p><strong>Variable-length integers</strong> are encoded with a single leading byte representing the length of the following big-endian bytes.  For signed negative integers, the most significant bit of the leading byte is a 1.</p>
<ul>
<li><code>uint</code>: 1-byte length prefixed variable-size (0 ~ 255 bytes) unsigned integers</li>
<li><code>int</code>: 1-byte length prefixed variable-size (0 ~ 127 bytes) signed integers</li>
</ul>
<p>NOTE: While the number 0 (zero) is encoded with a single byte <code>x00</code>, the number 1 (one) takes two bytes to represent: <code>x0101</code>.  This isn&#x2019;t the most efficient representation, but the rules are easier to remember.</p>
<table>
<thead>
<tr>
<th>number</th>
<th>binary <code>uint</code></th>
<th>binary <code>int</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td><code>x00</code></td>
<td><code>x00</code></td>
</tr>
<tr>
<td>1</td>
<td><code>x0101</code></td>
<td><code>x0101</code></td>
</tr>
<tr>
<td>2</td>
<td><code>x0102</code></td>
<td><code>x0102</code></td>
</tr>
<tr>
<td>256</td>
<td><code>x020100</code></td>
<td><code>x020100</code></td>
</tr>
<tr>
<td>2^(127*8)-1</td>
<td><code>x7FFFFF...</code></td>
<td><code>x7FFFFF...</code></td>
</tr>
<tr>
<td>2^(127*8)</td>
<td><code>x800100...</code></td>
<td>overflow</td>
</tr>
<tr>
<td>2^(255*8)-1</td>
<td><code>xFFFFFF...</code></td>
<td>overflow</td>
</tr>
<tr>
<td>-1</td>
<td>n/a</td>
<td><code>x8101</code></td>
</tr>
<tr>
<td>-2</td>
<td>n/a</td>
<td><code>x8102</code></td>
</tr>
<tr>
<td>-256</td>
<td>n/a</td>
<td><code>x820100</code></td>
</tr>
</tbody>
</table>
<p><strong>Structures</strong> are encoded by encoding the field values in order of declaration.</p>
<pre><code class=language-go>type Foo struct {
    MyString string
    MyUint32 uint32
}
var foo = Foo{&quot;626172&quot;, math.MaxUint32}

/* The binary representation of foo:
 0103626172FFFFFFFF
 0103:               `int` encoded length of string, here 3
     626172:         3 bytes of string &quot;bar&quot;
           FFFFFFFF: 4 bytes of uint32 MaxUint32
*/
</code></pre>
<p><strong>Variable-length arrays</strong> are encoded with a leading <code>int</code> denoting the length of the array followed by the binary representation of the items.  <strong>Fixed-length arrays</strong> are similar but aren&#x2019;t preceded by the leading <code>int</code>.</p>
<pre><code class=language-go>foos := []Foo{foo, foo}

/* The binary representation of foos:
 01020103626172FFFFFFFF0103626172FFFFFFFF
 0102:                                     `int` encoded length of array, here 2
     0103626172FFFFFFFF:                   the first `foo`
                       0103626172FFFFFFFF: the second `foo`
*/

foos := [2]Foo{foo, foo} // fixed-length array

/* The binary representation of foos:
 0103626172FFFFFFFF0103626172FFFFFFFF
 0103626172FFFFFFFF:                   the first `foo`
                   0103626172FFFFFFFF: the second `foo`
*/
</code></pre>
<p><strong>Interfaces</strong> can represent one of any number of concrete types.  The concrete types of an interface must first be declared with their corresponding <code>type byte</code>.  An interface is then encoded with the leading <code>type byte</code>, then the binary encoding of the underlying concrete type.</p>
<p>NOTE: The byte <code>x00</code> is reserved for the <code>nil</code> interface value and <code>nil</code> pointer values.</p>
<pre><code class=language-go>type Animal interface{}
type Dog uint32
type Cat string

RegisterInterface(
    struct{ Animal }{},          // Convenience for referencing the &apos;Animal&apos; interface
    ConcreteType{Dog(0),  0x01}, // Register the byte 0x01 to denote a Dog
    ConcreteType{Cat(&quot;&quot;), 0x02}, // Register the byte 0x02 to denote a Cat
)

var animal Animal = Dog(02)

/* The binary representation of animal:
 010102
 01:     the type byte for a `Dog`
   0102: the bytes of Dog(02)
*/
</code></pre>
<p><strong>Pointers</strong> are encoded with a single leading byte <code>x00</code> for <code>nil</code> pointers, otherwise encoded with a leading byte <code>x01</code> followed by the binary encoding of the value pointed to.</p>
<p>NOTE: It&#x2019;s easy to convert pointer types into interface types, since the <code>type byte</code> <code>x00</code> is always <code>nil</code>.</p>
<h2 id=json>JSON</h2>
<p>The JSON codec is compatible with the <a href=#binary><code>binary</code></a> codec, and is fairly intuitive if you&#x2019;re already familiar with golang&#x2019;s JSON encoding.  Some quirks are noted below:</p>
<ul>
<li>variable-length and fixed-length bytes are encoded as uppercase hexadecimal strings</li>
<li>interface values are encoded as an array of two items: <code>[type_byte, concrete_value]</code></li>
<li>times are encoded as rfc2822 strings</li>
</ul>
</div>
</template>

<script>
export default {
  mounted () {
    document.title = 'Wire Protocol - Documentation - Tendermint'
  }
}
</script>
