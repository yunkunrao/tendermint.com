<template><div><h1>types</h1>
<p><code>import &quot;github.com/tendermint/tendermint/types&quot;</code></p>
<ul>
<li><a href=#pkg-overview>Overview</a></li>
<li><a href=#pkg-index>Index</a></li>
</ul>
<h2><a name=pkg-overview>Overview</a></h2>
<h2><a name=pkg-index>Index</a></h2>
<ul>
<li><a href=#pkg-constants>Constants</a></li>
<li><a href=#pkg-variables>Variables</a></li>
<li><a href=#AddListenerForEvent>func AddListenerForEvent(evsw EventSwitch, id, event string, cb func(data TMEventData))</a></li>
<li><a href=#EventStringBond>func EventStringBond() string</a></li>
<li><a href=#EventStringCompleteProposal>func EventStringCompleteProposal() string</a></li>
<li><a href=#EventStringDupeout>func EventStringDupeout() string</a></li>
<li><a href=#EventStringFork>func EventStringFork() string</a></li>
<li><a href=#EventStringLock>func EventStringLock() string</a></li>
<li><a href=#EventStringNewBlock>func EventStringNewBlock() string</a></li>
<li><a href=#EventStringNewBlockHeader>func EventStringNewBlockHeader() string</a></li>
<li><a href=#EventStringNewRound>func EventStringNewRound() string</a></li>
<li><a href=#EventStringNewRoundStep>func EventStringNewRoundStep() string</a></li>
<li><a href=#EventStringPolka>func EventStringPolka() string</a></li>
<li><a href=#EventStringRebond>func EventStringRebond() string</a></li>
<li><a href=#EventStringRelock>func EventStringRelock() string</a></li>
<li><a href=#EventStringTimeoutPropose>func EventStringTimeoutPropose() string</a></li>
<li><a href=#EventStringTimeoutWait>func EventStringTimeoutWait() string</a></li>
<li><a href=#EventStringTx>func EventStringTx(tx Tx) string</a></li>
<li><a href=#EventStringUnbond>func EventStringUnbond() string</a></li>
<li><a href=#EventStringUnlock>func EventStringUnlock() string</a></li>
<li><a href=#EventStringVote>func EventStringVote() string</a></li>
<li><a href=#FireEventCompleteProposal>func FireEventCompleteProposal(fireable events.Fireable, rs EventDataRoundState)</a></li>
<li><a href=#FireEventLock>func FireEventLock(fireable events.Fireable, rs EventDataRoundState)</a></li>
<li><a href=#FireEventNewBlock>func FireEventNewBlock(fireable events.Fireable, block EventDataNewBlock)</a></li>
<li><a href=#FireEventNewBlockHeader>func FireEventNewBlockHeader(fireable events.Fireable, header EventDataNewBlockHeader)</a></li>
<li><a href=#FireEventNewRound>func FireEventNewRound(fireable events.Fireable, rs EventDataRoundState)</a></li>
<li><a href=#FireEventNewRoundStep>func FireEventNewRoundStep(fireable events.Fireable, rs EventDataRoundState)</a></li>
<li><a href=#FireEventPolka>func FireEventPolka(fireable events.Fireable, rs EventDataRoundState)</a></li>
<li><a href=#FireEventRelock>func FireEventRelock(fireable events.Fireable, rs EventDataRoundState)</a></li>
<li><a href=#FireEventTimeoutPropose>func FireEventTimeoutPropose(fireable events.Fireable, rs EventDataRoundState)</a></li>
<li><a href=#FireEventTimeoutWait>func FireEventTimeoutWait(fireable events.Fireable, rs EventDataRoundState)</a></li>
<li><a href=#FireEventTx>func FireEventTx(fireable events.Fireable, tx EventDataTx)</a></li>
<li><a href=#FireEventUnlock>func FireEventUnlock(fireable events.Fireable, rs EventDataRoundState)</a></li>
<li><a href=#FireEventVote>func FireEventVote(fireable events.Fireable, vote EventDataVote)</a></li>
<li><a href=#HashSignBytes>func HashSignBytes(chainID string, o Signable) []byte</a></li>
<li><a href=#IsVoteTypeValid>func IsVoteTypeValid(type_ byte) bool</a></li>
<li><a href=#SignBytes>func SignBytes(chainID string, o Signable) []byte</a></li>
<li><a href=#Block>type Block</a>
<ul>
<li><a href=#MakeBlock>func MakeBlock(height int, chainID string, txs []Tx, commit *Commit, prevBlockID BlockID, valHash, appHash []byte, partSize int) (*Block, *PartSet)</a></li>
<li><a href=#Block.FillHeader>func (b *Block) FillHeader()</a></li>
<li><a href=#Block.Hash>func (b *Block) Hash() []byte</a></li>
<li><a href=#Block.HashesTo>func (b *Block) HashesTo(hash []byte) bool</a></li>
<li><a href=#Block.MakePartSet>func (b *Block) MakePartSet(partSize int) *PartSet</a></li>
<li><a href=#Block.String>func (b *Block) String() string</a></li>
<li><a href=#Block.StringIndented>func (b *Block) StringIndented(indent string) string</a></li>
<li><a href=#Block.StringShort>func (b *Block) StringShort() string</a></li>
<li><a href=#Block.ValidateBasic>func (b *Block) ValidateBasic(chainID string, lastBlockHeight int, lastBlockID BlockID, lastBlockTime time.Time, appHash []byte) error</a></li>
</ul>
</li>
<li><a href=#BlockID>type BlockID</a>
<ul>
<li><a href=#BlockID.Equals>func (blockID BlockID) Equals(other BlockID) bool</a></li>
<li><a href=#BlockID.IsZero>func (blockID BlockID) IsZero() bool</a></li>
<li><a href=#BlockID.Key>func (blockID BlockID) Key() string</a></li>
<li><a href=#BlockID.String>func (blockID BlockID) String() string</a></li>
<li><a href=#BlockID.WriteSignBytes>func (blockID BlockID) WriteSignBytes(w io.Writer, n *int, err *error)</a></li>
</ul>
</li>
<li><a href=#BlockMeta>type BlockMeta</a>
<ul>
<li><a href=#NewBlockMeta>func NewBlockMeta(block *Block, blockParts *PartSet) *BlockMeta</a></li>
</ul>
</li>
<li><a href=#CanonicalJSONBlockID>type CanonicalJSONBlockID</a>
<ul>
<li><a href=#CanonicalBlockID>func CanonicalBlockID(blockID BlockID) CanonicalJSONBlockID</a></li>
</ul>
</li>
<li><a href=#CanonicalJSONOnceProposal>type CanonicalJSONOnceProposal</a></li>
<li><a href=#CanonicalJSONOnceVote>type CanonicalJSONOnceVote</a></li>
<li><a href=#CanonicalJSONPartSetHeader>type CanonicalJSONPartSetHeader</a>
<ul>
<li><a href=#CanonicalPartSetHeader>func CanonicalPartSetHeader(psh PartSetHeader) CanonicalJSONPartSetHeader</a></li>
</ul>
</li>
<li><a href=#CanonicalJSONProposal>type CanonicalJSONProposal</a>
<ul>
<li><a href=#CanonicalProposal>func CanonicalProposal(proposal *Proposal) CanonicalJSONProposal</a></li>
</ul>
</li>
<li><a href=#CanonicalJSONVote>type CanonicalJSONVote</a>
<ul>
<li><a href=#CanonicalVote>func CanonicalVote(vote *Vote) CanonicalJSONVote</a></li>
</ul>
</li>
<li><a href=#Commit>type Commit</a>
<ul>
<li><a href=#Commit.BitArray>func (commit *Commit) BitArray() *BitArray</a></li>
<li><a href=#Commit.FirstPrecommit>func (commit *Commit) FirstPrecommit() *Vote</a></li>
<li><a href=#Commit.GetByIndex>func (commit *Commit) GetByIndex(index int) *Vote</a></li>
<li><a href=#Commit.Hash>func (commit *Commit) Hash() []byte</a></li>
<li><a href=#Commit.Height>func (commit *Commit) Height() int</a></li>
<li><a href=#Commit.IsCommit>func (commit *Commit) IsCommit() bool</a></li>
<li><a href=#Commit.Round>func (commit *Commit) Round() int</a></li>
<li><a href=#Commit.Size>func (commit *Commit) Size() int</a></li>
<li><a href=#Commit.StringIndented>func (commit *Commit) StringIndented(indent string) string</a></li>
<li><a href=#Commit.Type>func (commit *Commit) Type() byte</a></li>
<li><a href=#Commit.ValidateBasic>func (commit *Commit) ValidateBasic() error</a></li>
</ul>
</li>
<li><a href=#Data>type Data</a>
<ul>
<li><a href=#Data.Hash>func (data *Data) Hash() []byte</a></li>
<li><a href=#Data.StringIndented>func (data *Data) StringIndented(indent string) string</a></li>
</ul>
</li>
<li><a href=#DefaultSigner>type DefaultSigner</a>
<ul>
<li><a href=#NewDefaultSigner>func NewDefaultSigner(priv crypto.PrivKey) *DefaultSigner</a></li>
<li><a href=#DefaultSigner.Sign>func (ds *DefaultSigner) Sign(msg []byte) crypto.Signature</a></li>
</ul>
</li>
<li><a href=#ErrVoteConflictingVotes>type ErrVoteConflictingVotes</a>
<ul>
<li><a href=#ErrVoteConflictingVotes.Error>func (err *ErrVoteConflictingVotes) Error() string</a></li>
</ul>
</li>
<li><a href=#EventCache>type EventCache</a>
<ul>
<li><a href=#NewEventCache>func NewEventCache(evsw EventSwitch) EventCache</a></li>
</ul>
</li>
<li><a href=#EventDataNewBlock>type EventDataNewBlock</a>
<ul>
<li><a href=#EventDataNewBlock.AssertIsTMEventData>func (_ EventDataNewBlock) AssertIsTMEventData()</a></li>
</ul>
</li>
<li><a href=#EventDataNewBlockHeader>type EventDataNewBlockHeader</a>
<ul>
<li><a href=#EventDataNewBlockHeader.AssertIsTMEventData>func (_ EventDataNewBlockHeader) AssertIsTMEventData()</a></li>
</ul>
</li>
<li><a href=#EventDataRoundState>type EventDataRoundState</a>
<ul>
<li><a href=#EventDataRoundState.AssertIsTMEventData>func (_ EventDataRoundState) AssertIsTMEventData()</a></li>
</ul>
</li>
<li><a href=#EventDataTx>type EventDataTx</a>
<ul>
<li><a href=#EventDataTx.AssertIsTMEventData>func (_ EventDataTx) AssertIsTMEventData()</a></li>
</ul>
</li>
<li><a href=#EventDataVote>type EventDataVote</a>
<ul>
<li><a href=#EventDataVote.AssertIsTMEventData>func (_ EventDataVote) AssertIsTMEventData()</a></li>
</ul>
</li>
<li><a href=#EventSwitch>type EventSwitch</a>
<ul>
<li><a href=#NewEventSwitch>func NewEventSwitch() EventSwitch</a></li>
</ul>
</li>
<li><a href=#Eventable>type Eventable</a></li>
<li><a href=#Fireable>type Fireable</a></li>
<li><a href=#GenesisDoc>type GenesisDoc</a>
<ul>
<li><a href=#GenesisDocFromJSON>func GenesisDocFromJSON(jsonBlob []byte) (genDoc *GenesisDoc, err error)</a></li>
<li><a href=#GenesisDoc.SaveAs>func (genDoc *GenesisDoc) SaveAs(file string) error</a></li>
</ul>
</li>
<li><a href=#GenesisValidator>type GenesisValidator</a></li>
<li><a href=#Header>type Header</a>
<ul>
<li><a href=#Header.Hash>func (h *Header) Hash() []byte</a></li>
<li><a href=#Header.StringIndented>func (h *Header) StringIndented(indent string) string</a></li>
</ul>
</li>
<li><a href=#Part>type Part</a>
<ul>
<li><a href=#Part.Hash>func (part *Part) Hash() []byte</a></li>
<li><a href=#Part.String>func (part *Part) String() string</a></li>
<li><a href=#Part.StringIndented>func (part *Part) StringIndented(indent string) string</a></li>
</ul>
</li>
<li><a href=#PartSet>type PartSet</a>
<ul>
<li><a href=#NewPartSetFromData>func NewPartSetFromData(data []byte, partSize int) *PartSet</a></li>
<li><a href=#NewPartSetFromHeader>func NewPartSetFromHeader(header PartSetHeader) *PartSet</a></li>
<li><a href=#PartSet.AddPart>func (ps *PartSet) AddPart(part *Part, verify bool) (bool, error)</a></li>
<li><a href=#PartSet.BitArray>func (ps *PartSet) BitArray() *BitArray</a></li>
<li><a href=#PartSet.Count>func (ps *PartSet) Count() int</a></li>
<li><a href=#PartSet.GetPart>func (ps *PartSet) GetPart(index int) *Part</a></li>
<li><a href=#PartSet.GetReader>func (ps *PartSet) GetReader() io.Reader</a></li>
<li><a href=#PartSet.HasHeader>func (ps *PartSet) HasHeader(header PartSetHeader) bool</a></li>
<li><a href=#PartSet.Hash>func (ps *PartSet) Hash() []byte</a></li>
<li><a href=#PartSet.HashesTo>func (ps *PartSet) HashesTo(hash []byte) bool</a></li>
<li><a href=#PartSet.Header>func (ps *PartSet) Header() PartSetHeader</a></li>
<li><a href=#PartSet.IsComplete>func (ps *PartSet) IsComplete() bool</a></li>
<li><a href=#PartSet.StringShort>func (ps *PartSet) StringShort() string</a></li>
<li><a href=#PartSet.Total>func (ps *PartSet) Total() int</a></li>
</ul>
</li>
<li><a href=#PartSetHeader>type PartSetHeader</a>
<ul>
<li><a href=#PartSetHeader.Equals>func (psh PartSetHeader) Equals(other PartSetHeader) bool</a></li>
<li><a href=#PartSetHeader.IsZero>func (psh PartSetHeader) IsZero() bool</a></li>
<li><a href=#PartSetHeader.String>func (psh PartSetHeader) String() string</a></li>
<li><a href=#PartSetHeader.WriteSignBytes>func (psh PartSetHeader) WriteSignBytes(w io.Writer, n *int, err *error)</a></li>
</ul>
</li>
<li><a href=#PartSetReader>type PartSetReader</a>
<ul>
<li><a href=#NewPartSetReader>func NewPartSetReader(parts []*Part) *PartSetReader</a></li>
<li><a href=#PartSetReader.Read>func (psr *PartSetReader) Read(p []byte) (n int, err error)</a></li>
</ul>
</li>
<li><a href=#PrivValidator>type PrivValidator</a>
<ul>
<li><a href=#GenPrivValidator>func GenPrivValidator() *PrivValidator</a></li>
<li><a href=#LoadOrGenPrivValidator>func LoadOrGenPrivValidator(filePath string) *PrivValidator</a></li>
<li><a href=#LoadPrivValidator>func LoadPrivValidator(filePath string) *PrivValidator</a></li>
<li><a href=#PrivValidator.GetAddress>func (privVal *PrivValidator) GetAddress() []byte</a></li>
<li><a href=#PrivValidator.Reset>func (privVal *PrivValidator) Reset()</a></li>
<li><a href=#PrivValidator.Save>func (privVal *PrivValidator) Save()</a></li>
<li><a href=#PrivValidator.SetFile>func (privVal *PrivValidator) SetFile(filePath string)</a></li>
<li><a href=#PrivValidator.SetSigner>func (privVal *PrivValidator) SetSigner(s Signer)</a></li>
<li><a href=#PrivValidator.SignProposal>func (privVal *PrivValidator) SignProposal(chainID string, proposal *Proposal) error</a></li>
<li><a href=#PrivValidator.SignVote>func (privVal *PrivValidator) SignVote(chainID string, vote *Vote) error</a></li>
<li><a href=#PrivValidator.String>func (privVal *PrivValidator) String() string</a></li>
</ul>
</li>
<li><a href=#PrivValidatorsByAddress>type PrivValidatorsByAddress</a>
<ul>
<li><a href=#PrivValidatorsByAddress.Len>func (pvs PrivValidatorsByAddress) Len() int</a></li>
<li><a href=#PrivValidatorsByAddress.Less>func (pvs PrivValidatorsByAddress) Less(i, j int) bool</a></li>
<li><a href=#PrivValidatorsByAddress.Swap>func (pvs PrivValidatorsByAddress) Swap(i, j int)</a></li>
</ul>
</li>
<li><a href=#Proposal>type Proposal</a>
<ul>
<li><a href=#NewProposal>func NewProposal(height int, round int, blockPartsHeader PartSetHeader, polRound int, polBlockID BlockID) *Proposal</a></li>
<li><a href=#Proposal.String>func (p *Proposal) String() string</a></li>
<li><a href=#Proposal.WriteSignBytes>func (p *Proposal) WriteSignBytes(chainID string, w io.Writer, n *int, err *error)</a></li>
</ul>
</li>
<li><a href=#Signable>type Signable</a></li>
<li><a href=#Signer>type Signer</a></li>
<li><a href=#TMEventData>type TMEventData</a></li>
<li><a href=#Tx>type Tx</a>
<ul>
<li><a href=#Tx.Hash>func (tx Tx) Hash() []byte</a></li>
</ul>
</li>
<li><a href=#Txs>type Txs</a>
<ul>
<li><a href=#Txs.Hash>func (txs Txs) Hash() []byte</a></li>
</ul>
</li>
<li><a href=#Validator>type Validator</a>
<ul>
<li><a href=#NewValidator>func NewValidator(pubKey crypto.PubKey, votingPower int64) *Validator</a></li>
<li><a href=#RandValidator>func RandValidator(randPower bool, minPower int64) (*Validator, *PrivValidator)</a></li>
<li><a href=#Validator.CompareAccum>func (v *Validator) CompareAccum(other *Validator) *Validator</a></li>
<li><a href=#Validator.Copy>func (v *Validator) Copy() *Validator</a></li>
<li><a href=#Validator.Hash>func (v *Validator) Hash() []byte</a></li>
<li><a href=#Validator.String>func (v *Validator) String() string</a></li>
</ul>
</li>
<li><a href=#ValidatorSet>type ValidatorSet</a>
<ul>
<li><a href=#NewValidatorSet>func NewValidatorSet(vals []*Validator) *ValidatorSet</a></li>
<li><a href=#RandValidatorSet>func RandValidatorSet(numValidators int, votingPower int64) (*ValidatorSet, []*PrivValidator)</a></li>
<li><a href=#ValidatorSet.Add>func (valSet *ValidatorSet) Add(val *Validator) (added bool)</a></li>
<li><a href=#ValidatorSet.Copy>func (valSet *ValidatorSet) Copy() *ValidatorSet</a></li>
<li><a href=#ValidatorSet.GetByAddress>func (valSet *ValidatorSet) GetByAddress(address []byte) (index int, val *Validator)</a></li>
<li><a href=#ValidatorSet.GetByIndex>func (valSet *ValidatorSet) GetByIndex(index int) (address []byte, val *Validator)</a></li>
<li><a href=#ValidatorSet.HasAddress>func (valSet *ValidatorSet) HasAddress(address []byte) bool</a></li>
<li><a href=#ValidatorSet.Hash>func (valSet *ValidatorSet) Hash() []byte</a></li>
<li><a href=#ValidatorSet.IncrementAccum>func (valSet *ValidatorSet) IncrementAccum(times int)</a></li>
<li><a href=#ValidatorSet.Iterate>func (valSet *ValidatorSet) Iterate(fn func(index int, val *Validator) bool)</a></li>
<li><a href=#ValidatorSet.Proposer>func (valSet *ValidatorSet) Proposer() (proposer *Validator)</a></li>
<li><a href=#ValidatorSet.Remove>func (valSet *ValidatorSet) Remove(address []byte) (val *Validator, removed bool)</a></li>
<li><a href=#ValidatorSet.Size>func (valSet *ValidatorSet) Size() int</a></li>
<li><a href=#ValidatorSet.String>func (valSet *ValidatorSet) String() string</a></li>
<li><a href=#ValidatorSet.StringIndented>func (valSet *ValidatorSet) StringIndented(indent string) string</a></li>
<li><a href=#ValidatorSet.TotalVotingPower>func (valSet *ValidatorSet) TotalVotingPower() int64</a></li>
<li><a href=#ValidatorSet.Update>func (valSet *ValidatorSet) Update(val *Validator) (updated bool)</a></li>
<li><a href=#ValidatorSet.VerifyCommit>func (valSet *ValidatorSet) VerifyCommit(chainID string, blockID BlockID, height int, commit *Commit) error</a></li>
<li><a href=#ValidatorSet.VerifyCommitAny>func (valSet *ValidatorSet) VerifyCommitAny(chainID string, blockID BlockID, height int, commit *Commit) error</a></li>
</ul>
</li>
<li><a href=#ValidatorsByAddress>type ValidatorsByAddress</a>
<ul>
<li><a href=#ValidatorsByAddress.Len>func (vs ValidatorsByAddress) Len() int</a></li>
<li><a href=#ValidatorsByAddress.Less>func (vs ValidatorsByAddress) Less(i, j int) bool</a></li>
<li><a href=#ValidatorsByAddress.Swap>func (vs ValidatorsByAddress) Swap(i, j int)</a></li>
</ul>
</li>
<li><a href=#Vote>type Vote</a>
<ul>
<li><a href=#Vote.Copy>func (vote *Vote) Copy() *Vote</a></li>
<li><a href=#Vote.String>func (vote *Vote) String() string</a></li>
<li><a href=#Vote.WriteSignBytes>func (vote *Vote) WriteSignBytes(chainID string, w io.Writer, n *int, err *error)</a></li>
</ul>
</li>
<li><a href=#VoteSet>type VoteSet</a>
<ul>
<li><a href=#NewVoteSet>func NewVoteSet(chainID string, height int, round int, type_ byte, valSet *ValidatorSet) *VoteSet</a></li>
<li><a href=#VoteSet.AddVote>func (voteSet *VoteSet) AddVote(vote *Vote) (added bool, err error)</a></li>
<li><a href=#VoteSet.BitArray>func (voteSet *VoteSet) BitArray() *BitArray</a></li>
<li><a href=#VoteSet.BitArrayByBlockID>func (voteSet *VoteSet) BitArrayByBlockID(blockID BlockID) *BitArray</a></li>
<li><a href=#VoteSet.ChainID>func (voteSet *VoteSet) ChainID() string</a></li>
<li><a href=#VoteSet.GetByAddress>func (voteSet *VoteSet) GetByAddress(address []byte) *Vote</a></li>
<li><a href=#VoteSet.GetByIndex>func (voteSet *VoteSet) GetByIndex(valIndex int) *Vote</a></li>
<li><a href=#VoteSet.HasAll>func (voteSet *VoteSet) HasAll() bool</a></li>
<li><a href=#VoteSet.HasTwoThirdsAny>func (voteSet *VoteSet) HasTwoThirdsAny() bool</a></li>
<li><a href=#VoteSet.HasTwoThirdsMajority>func (voteSet *VoteSet) HasTwoThirdsMajority() bool</a></li>
<li><a href=#VoteSet.Height>func (voteSet *VoteSet) Height() int</a></li>
<li><a href=#VoteSet.IsCommit>func (voteSet *VoteSet) IsCommit() bool</a></li>
<li><a href=#VoteSet.MakeCommit>func (voteSet *VoteSet) MakeCommit() *Commit</a></li>
<li><a href=#VoteSet.Round>func (voteSet *VoteSet) Round() int</a></li>
<li><a href=#VoteSet.SetPeerMaj23>func (voteSet *VoteSet) SetPeerMaj23(peerID string, blockID BlockID)</a></li>
<li><a href=#VoteSet.Size>func (voteSet *VoteSet) Size() int</a></li>
<li><a href=#VoteSet.String>func (voteSet *VoteSet) String() string</a></li>
<li><a href=#VoteSet.StringIndented>func (voteSet *VoteSet) StringIndented(indent string) string</a></li>
<li><a href=#VoteSet.StringShort>func (voteSet *VoteSet) StringShort() string</a></li>
<li><a href=#VoteSet.TwoThirdsMajority>func (voteSet *VoteSet) TwoThirdsMajority() (blockID BlockID, ok bool)</a></li>
<li><a href=#VoteSet.Type>func (voteSet *VoteSet) Type() byte</a></li>
</ul>
</li>
<li><a href=#VoteSetReader>type VoteSetReader</a></li>
</ul>
<h4><a name=pkg-files>Package files</a></h4>
<p><router-link to=/src/github.com/tendermint/tendermint/types/block.go>block.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/block_meta.go>block_meta.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/canonical_json.go>canonical_json.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/events.go>events.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/genesis.go>genesis.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/keys.go>keys.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/log.go>log.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/part_set.go>part_set.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/priv_validator.go>priv_validator.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/proposal.go>proposal.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/protobuf.go>protobuf.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/signable.go>signable.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/tx.go>tx.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/validator.go>validator.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/validator_set.go>validator_set.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/vote.go>vote.go</router-link> <router-link to=/src/github.com/tendermint/tendermint/types/vote_set.go>vote_set.go</router-link></p>
<h2><a name=pkg-constants>Constants</a></h2>
<pre><code class=language-go>const (
    EventDataTypeNewBlock       = byte(0x01)
    EventDataTypeFork           = byte(0x02)
    EventDataTypeTx             = byte(0x03)
    EventDataTypeNewBlockHeader = byte(0x04)

    EventDataTypeRoundState = byte(0x11)
    EventDataTypeVote       = byte(0x12)
)
</code></pre>
<pre><code class=language-go>const (
    VoteTypePrevote   = byte(0x01)
    VoteTypePrecommit = byte(0x02)
)
</code></pre>
<p>Types of votes
TODO Make a new type &#x201C;VoteType&#x201D;</p>
<pre><code class=language-go>const MaxBlockSize = 22020096 // 21MB TODO make it configurable

</code></pre>
<h2><a name=pkg-variables>Variables</a></h2>
<pre><code class=language-go>var (
    PeerStateKey     = &quot;ConsensusReactor.peerState&quot;
    PeerMempoolChKey = &quot;MempoolReactor.peerMempoolCh&quot;
)
</code></pre>
<pre><code class=language-go>var (
    ErrPartSetUnexpectedIndex = errors.New(&quot;Error part set unexpected index&quot;)
    ErrPartSetInvalidProof    = errors.New(&quot;Error part set invalid proof&quot;)
)
</code></pre>
<pre><code class=language-go>var (
    ErrInvalidBlockPartSignature = errors.New(&quot;Error invalid block part signature&quot;)
    ErrInvalidBlockPartHash      = errors.New(&quot;Error invalid block part hash&quot;)
)
</code></pre>
<pre><code class=language-go>var (
    ErrVoteUnexpectedStep          = errors.New(&quot;Unexpected step&quot;)
    ErrVoteInvalidValidatorIndex   = errors.New(&quot;Invalid round vote validator index&quot;)
    ErrVoteInvalidValidatorAddress = errors.New(&quot;Invalid round vote validator address&quot;)
    ErrVoteInvalidSignature        = errors.New(&quot;Invalid round vote signature&quot;)
    ErrVoteInvalidBlockHash        = errors.New(&quot;Invalid block hash&quot;)
)
</code></pre>
<pre><code class=language-go>var GenDocKey = []byte(&quot;GenDocKey&quot;)
</code></pre>
<pre><code class=language-go>var TM2PB = tm2pb{}
</code></pre>
<p>Convert tendermint types to protobuf types</p>
<pre><code class=language-go>var ValidatorCodec = validatorCodec{}
</code></pre>
<h2><a name=AddListenerForEvent>func</a> <router-link to="/src/target/events.go?s=4038:4125#L128">AddListenerForEvent</router-link></h2>
<pre><code class=language-go>func AddListenerForEvent(evsw EventSwitch, id, event string, cb func(data TMEventData))
</code></pre>
<h2><a name=EventStringBond>func</a> <router-link to="/src/target/events.go?s=279:308#L4">EventStringBond</router-link></h2>
<pre><code class=language-go>func EventStringBond() string
</code></pre>
<p>Reserved</p>
<h2><a name=EventStringCompleteProposal>func</a> <router-link to="/src/target/events.go?s=946:987#L16">EventStringCompleteProposal</router-link></h2>
<pre><code class=language-go>func EventStringCompleteProposal() string
</code></pre>
<h2><a name=EventStringDupeout>func</a> <router-link to="/src/target/events.go?s=436:468#L7">EventStringDupeout</router-link></h2>
<pre><code class=language-go>func EventStringDupeout() string
</code></pre>
<h2><a name=EventStringFork>func</a> <router-link to="/src/target/events.go?s=490:519#L8">EventStringFork</router-link></h2>
<pre><code class=language-go>func EventStringFork() string
</code></pre>
<h2><a name=EventStringLock>func</a> <router-link to="/src/target/events.go?s=1141:1170#L19">EventStringLock</router-link></h2>
<pre><code class=language-go>func EventStringLock() string
</code></pre>
<h2><a name=EventStringNewBlock>func</a> <router-link to="/src/target/events.go?s=610:643#L11">EventStringNewBlock</router-link></h2>
<pre><code class=language-go>func EventStringNewBlock() string
</code></pre>
<h2><a name=EventStringNewBlockHeader>func</a> <router-link to="/src/target/events.go?s=674:713#L12">EventStringNewBlockHeader</router-link></h2>
<pre><code class=language-go>func EventStringNewBlockHeader() string
</code></pre>
<h2><a name=EventStringNewRound>func</a> <router-link to="/src/target/events.go?s=744:777#L13">EventStringNewRound</router-link></h2>
<pre><code class=language-go>func EventStringNewRound() string
</code></pre>
<h2><a name=EventStringNewRoundStep>func</a> <router-link to="/src/target/events.go?s=808:845#L14">EventStringNewRoundStep</router-link></h2>
<pre><code class=language-go>func EventStringNewRoundStep() string
</code></pre>
<h2><a name=EventStringPolka>func</a> <router-link to="/src/target/events.go?s=1018:1048#L17">EventStringPolka</router-link></h2>
<pre><code class=language-go>func EventStringPolka() string
</code></pre>
<h2><a name=EventStringRebond>func</a> <router-link to="/src/target/events.go?s=383:414#L6">EventStringRebond</router-link></h2>
<pre><code class=language-go>func EventStringRebond() string
</code></pre>
<h2><a name=EventStringRelock>func</a> <router-link to="/src/target/events.go?s=1201:1232#L20">EventStringRelock</router-link></h2>
<pre><code class=language-go>func EventStringRelock() string
</code></pre>
<h2><a name=EventStringTimeoutPropose>func</a> <router-link to="/src/target/events.go?s=876:915#L15">EventStringTimeoutPropose</router-link></h2>
<pre><code class=language-go>func EventStringTimeoutPropose() string
</code></pre>
<h2><a name=EventStringTimeoutWait>func</a> <router-link to="/src/target/events.go?s=1263:1299#L21">EventStringTimeoutWait</router-link></h2>
<pre><code class=language-go>func EventStringTimeoutWait() string
</code></pre>
<h2><a name=EventStringTx>func</a> <router-link to="/src/target/events.go?s=541:573#L9">EventStringTx</router-link></h2>
<pre><code class=language-go>func EventStringTx(tx Tx) string
</code></pre>
<h2><a name=EventStringUnbond>func</a> <router-link to="/src/target/events.go?s=330:361#L5">EventStringUnbond</router-link></h2>
<pre><code class=language-go>func EventStringUnbond() string
</code></pre>
<h2><a name=EventStringUnlock>func</a> <router-link to="/src/target/events.go?s=1079:1110#L18">EventStringUnlock</router-link></h2>
<pre><code class=language-go>func EventStringUnlock() string
</code></pre>
<h2><a name=EventStringVote>func</a> <router-link to="/src/target/events.go?s=1330:1359#L22">EventStringVote</router-link></h2>
<pre><code class=language-go>func EventStringVote() string
</code></pre>
<h2><a name=FireEventCompleteProposal>func</a> <router-link to="/src/target/events.go?s=5333:5413#L171">FireEventCompleteProposal</router-link></h2>
<pre><code class=language-go>func FireEventCompleteProposal(fireable events.Fireable, rs EventDataRoundState)
</code></pre>
<h2><a name=FireEventLock>func</a> <router-link to="/src/target/events.go?s=5839:5907#L187">FireEventLock</router-link></h2>
<pre><code class=language-go>func FireEventLock(fireable events.Fireable, rs EventDataRoundState)
</code></pre>
<h2><a name=FireEventNewBlock>func</a> <router-link to="/src/target/events.go?s=4262:4335#L137">FireEventNewBlock</router-link></h2>
<pre><code class=language-go>func FireEventNewBlock(fireable events.Fireable, block EventDataNewBlock)
</code></pre>
<h2><a name=FireEventNewBlockHeader>func</a> <router-link to="/src/target/events.go?s=4392:4478#L141">FireEventNewBlockHeader</router-link></h2>
<pre><code class=language-go>func FireEventNewBlockHeader(fireable events.Fireable, header EventDataNewBlockHeader)
</code></pre>
<h2><a name=FireEventNewRound>func</a> <router-link to="/src/target/events.go?s=5207:5279#L167">FireEventNewRound</router-link></h2>
<pre><code class=language-go>func FireEventNewRound(fireable events.Fireable, rs EventDataRoundState)
</code></pre>
<h2><a name=FireEventNewRoundStep>func</a> <router-link to="/src/target/events.go?s=4803:4879#L155">FireEventNewRoundStep</router-link></h2>
<pre><code class=language-go>func FireEventNewRoundStep(fireable events.Fireable, rs EventDataRoundState)
</code></pre>
<h2><a name=FireEventPolka>func</a> <router-link to="/src/target/events.go?s=5475:5544#L175">FireEventPolka</router-link></h2>
<pre><code class=language-go>func FireEventPolka(fireable events.Fireable, rs EventDataRoundState)
</code></pre>
<h2><a name=FireEventRelock>func</a> <router-link to="/src/target/events.go?s=5717:5787#L183">FireEventRelock</router-link></h2>
<pre><code class=language-go>func FireEventRelock(fireable events.Fireable, rs EventDataRoundState)
</code></pre>
<h2><a name=FireEventTimeoutPropose>func</a> <router-link to="/src/target/events.go?s=4937:5015#L159">FireEventTimeoutPropose</router-link></h2>
<pre><code class=language-go>func FireEventTimeoutPropose(fireable events.Fireable, rs EventDataRoundState)
</code></pre>
<h2><a name=FireEventTimeoutWait>func</a> <router-link to="/src/target/events.go?s=5075:5150#L163">FireEventTimeoutWait</router-link></h2>
<pre><code class=language-go>func FireEventTimeoutWait(fireable events.Fireable, rs EventDataRoundState)
</code></pre>
<h2><a name=FireEventTx>func</a> <router-link to="/src/target/events.go?s=4658:4716#L149">FireEventTx</router-link></h2>
<pre><code class=language-go>func FireEventTx(fireable events.Fireable, tx EventDataTx)
</code></pre>
<h2><a name=FireEventUnlock>func</a> <router-link to="/src/target/events.go?s=5595:5665#L179">FireEventUnlock</router-link></h2>
<pre><code class=language-go>func FireEventUnlock(fireable events.Fireable, rs EventDataRoundState)
</code></pre>
<h2><a name=FireEventVote>func</a> <router-link to="/src/target/events.go?s=4542:4606#L145">FireEventVote</router-link></h2>
<pre><code class=language-go>func FireEventVote(fireable events.Fireable, vote EventDataVote)
</code></pre>
<h2><a name=HashSignBytes>func</a> <router-link to="/src/target/signable.go?s=699:752#L18">HashSignBytes</router-link></h2>
<pre><code class=language-go>func HashSignBytes(chainID string, o Signable) []byte
</code></pre>
<p>HashSignBytes is a convenience method for getting the hash of the bytes of a signable</p>
<h2><a name=IsVoteTypeValid>func</a> <router-link to="/src/target/vote.go?s=820:857#L27">IsVoteTypeValid</router-link></h2>
<pre><code class=language-go>func IsVoteTypeValid(type_ byte) bool
</code></pre>
<h2><a name=SignBytes>func</a> <router-link to="/src/target/signable.go?s=399:448#L8">SignBytes</router-link></h2>
<pre><code class=language-go>func SignBytes(chainID string, o Signable) []byte
</code></pre>
<p>SignBytes is a convenience method for getting the bytes to sign of a Signable.</p>
<h2><a name=Block>type</a> <router-link to="/src/target/block.go?s=249:365#L8">Block</router-link></h2>
<pre><code class=language-go>type Block struct {
    *Header    `json:&quot;header&quot;`
    *Data      `json:&quot;data&quot;`
    LastCommit *Commit `json:&quot;last_commit&quot;`
}
</code></pre>
<h3><a name=MakeBlock>func</a> <router-link to="/src/target/block.go?s=384:532#L15">MakeBlock</router-link></h3>
<pre><code class=language-go>func MakeBlock(height int, chainID string, txs []Tx, commit *Commit,
    prevBlockID BlockID, valHash, appHash []byte, partSize int) (*Block, *PartSet)
</code></pre>
<p>TODO: version</p>
<h3><a name=Block.FillHeader>func</a> (*Block) <router-link to="/src/target/block.go?s=2551:2579#L76">FillHeader</router-link></h3>
<pre><code class=language-go>func (b *Block) FillHeader()
</code></pre>
<h3><a name=Block.Hash>func</a> (*Block) <router-link to="/src/target/block.go?s=2816:2845#L87">Hash</router-link></h3>
<pre><code class=language-go>func (b *Block) Hash() []byte
</code></pre>
<p>Computes and returns the block hash.
If the block is incomplete, block hash is nil for safety.</p>
<h3><a name=Block.HashesTo>func</a> (*Block) <router-link to="/src/target/block.go?s=3203:3245#L103">HashesTo</router-link></h3>
<pre><code class=language-go>func (b *Block) HashesTo(hash []byte) bool
</code></pre>
<p>Convenience.
A nil block never hashes to anything.
Nothing hashes to a nil hash.</p>
<h3><a name=Block.MakePartSet>func</a> (*Block) <router-link to="/src/target/block.go?s=2999:3049#L96">MakePartSet</router-link></h3>
<pre><code class=language-go>func (b *Block) MakePartSet(partSize int) *PartSet
</code></pre>
<h3><a name=Block.String>func</a> (*Block) <router-link to="/src/target/block.go?s=3359:3390#L113">String</router-link></h3>
<pre><code class=language-go>func (b *Block) String() string
</code></pre>
<h3><a name=Block.StringIndented>func</a> (*Block) <router-link to="/src/target/block.go?s=3425:3477#L117">StringIndented</router-link></h3>
<pre><code class=language-go>func (b *Block) StringIndented(indent string) string
</code></pre>
<h3><a name=Block.StringShort>func</a> (*Block) <router-link to="/src/target/block.go?s=3746:3782#L132">StringShort</router-link></h3>
<pre><code class=language-go>func (b *Block) StringShort() string
</code></pre>
<h3><a name=Block.ValidateBasic>func</a> (*Block) <router-link to="/src/target/block.go?s=1010:1145#L37">ValidateBasic</router-link></h3>
<pre><code class=language-go>func (b *Block) ValidateBasic(chainID string, lastBlockHeight int, lastBlockID BlockID,
    lastBlockTime time.Time, appHash []byte) error
</code></pre>
<p>Basic validation that doesn&#x2019;t involve state data.</p>
<h2><a name=BlockID>type</a> <router-link to="/src/target/block.go?s=10033:10139#L380">BlockID</router-link></h2>
<pre><code class=language-go>type BlockID struct {
    Hash        []byte        `json:&quot;hash&quot;`
    PartsHeader PartSetHeader `json:&quot;parts&quot;`
}
</code></pre>
<h3><a name=BlockID.Equals>func</a> (BlockID) <router-link to="/src/target/block.go?s=10246:10295#L389">Equals</router-link></h3>
<pre><code class=language-go>func (blockID BlockID) Equals(other BlockID) bool
</code></pre>
<h3><a name=BlockID.IsZero>func</a> (BlockID) <router-link to="/src/target/block.go?s=10141:10177#L385">IsZero</router-link></h3>
<pre><code class=language-go>func (blockID BlockID) IsZero() bool
</code></pre>
<h3><a name=BlockID.Key>func</a> (BlockID) <router-link to="/src/target/block.go?s=10398:10433#L394">Key</router-link></h3>
<pre><code class=language-go>func (blockID BlockID) Key() string
</code></pre>
<h3><a name=BlockID.String>func</a> (BlockID) <router-link to="/src/target/block.go?s=10726:10764#L407">String</router-link></h3>
<pre><code class=language-go>func (blockID BlockID) String() string
</code></pre>
<h3><a name=BlockID.WriteSignBytes>func</a> (BlockID) <router-link to="/src/target/block.go?s=10516:10586#L398">WriteSignBytes</router-link></h3>
<pre><code class=language-go>func (blockID BlockID) WriteSignBytes(w io.Writer, n *int, err *error)
</code></pre>
<h2><a name=BlockMeta>type</a> <router-link to="/src/target/block_meta.go?s=15:262#L1">BlockMeta</router-link></h2>
<pre><code class=language-go>type BlockMeta struct {
    Hash        []byte        `json:&quot;hash&quot;`         // The block hash
    Header      *Header       `json:&quot;header&quot;`       // The block&apos;s Header
    PartsHeader PartSetHeader `json:&quot;parts_header&quot;` // The PartSetHeader, for transfer
}
</code></pre>
<h3><a name=NewBlockMeta>func</a> <router-link to="/src/target/block_meta.go?s=264:327#L1">NewBlockMeta</router-link></h3>
<pre><code class=language-go>func NewBlockMeta(block *Block, blockParts *PartSet) *BlockMeta
</code></pre>
<h2><a name=CanonicalJSONBlockID>type</a> <router-link to="/src/target/canonical_json.go?s=98:263#L1">CanonicalJSONBlockID</router-link></h2>
<pre><code class=language-go>type CanonicalJSONBlockID struct {
    Hash        []byte                     `json:&quot;hash,omitempty&quot;`
    PartsHeader CanonicalJSONPartSetHeader `json:&quot;parts,omitempty&quot;`
}
</code></pre>
<h3><a name=CanonicalBlockID>func</a> <router-link to="/src/target/canonical_json.go?s=1405:1464#L36">CanonicalBlockID</router-link></h3>
<pre><code class=language-go>func CanonicalBlockID(blockID BlockID) CanonicalJSONBlockID
</code></pre>
<h2><a name=CanonicalJSONOnceProposal>type</a> <router-link to="/src/target/canonical_json.go?s=1070:1211#L23">CanonicalJSONOnceProposal</router-link></h2>
<pre><code class=language-go>type CanonicalJSONOnceProposal struct {
    ChainID  string                `json:&quot;chain_id&quot;`
    Proposal CanonicalJSONProposal `json:&quot;proposal&quot;`
}
</code></pre>
<h2><a name=CanonicalJSONOnceVote>type</a> <router-link to="/src/target/canonical_json.go?s=1213:1336#L28">CanonicalJSONOnceVote</router-link></h2>
<pre><code class=language-go>type CanonicalJSONOnceVote struct {
    ChainID string            `json:&quot;chain_id&quot;`
    Vote    CanonicalJSONVote `json:&quot;vote&quot;`
}
</code></pre>
<h2><a name=CanonicalJSONPartSetHeader>type</a> <router-link to="/src/target/canonical_json.go?s=265:364#L1">CanonicalJSONPartSetHeader</router-link></h2>
<pre><code class=language-go>type CanonicalJSONPartSetHeader struct {
    Hash  []byte `json:&quot;hash&quot;`
    Total int    `json:&quot;total&quot;`
}
</code></pre>
<h3><a name=CanonicalPartSetHeader>func</a> <router-link to="/src/target/canonical_json.go?s=1592:1665#L43">CanonicalPartSetHeader</router-link></h3>
<pre><code class=language-go>func CanonicalPartSetHeader(psh PartSetHeader) CanonicalJSONPartSetHeader
</code></pre>
<h2><a name=CanonicalJSONProposal>type</a> <router-link to="/src/target/canonical_json.go?s=366:728#L5">CanonicalJSONProposal</router-link></h2>
<pre><code class=language-go>type CanonicalJSONProposal struct {
    BlockPartsHeader CanonicalJSONPartSetHeader `json:&quot;block_parts_header&quot;`
    Height           int                        `json:&quot;height&quot;`
    POLBlockID       CanonicalJSONBlockID       `json:&quot;pol_block_id&quot;`
    POLRound         int                        `json:&quot;pol_round&quot;`
    Round            int                        `json:&quot;round&quot;`
}
</code></pre>
<h3><a name=CanonicalProposal>func</a> <router-link to="/src/target/canonical_json.go?s=1735:1799#L50">CanonicalProposal</router-link></h3>
<pre><code class=language-go>func CanonicalProposal(proposal *Proposal) CanonicalJSONProposal
</code></pre>
<h2><a name=CanonicalJSONVote>type</a> <router-link to="/src/target/canonical_json.go?s=730:946#L13">CanonicalJSONVote</router-link></h2>
<pre><code class=language-go>type CanonicalJSONVote struct {
    BlockID CanonicalJSONBlockID `json:&quot;block_id&quot;`
    Height  int                  `json:&quot;height&quot;`
    Round   int                  `json:&quot;round&quot;`
    Type    byte                 `json:&quot;type&quot;`
}
</code></pre>
<h3><a name=CanonicalVote>func</a> <router-link to="/src/target/canonical_json.go?s=2081:2129#L60">CanonicalVote</router-link></h3>
<pre><code class=language-go>func CanonicalVote(vote *Vote) CanonicalJSONVote
</code></pre>
<h2><a name=Commit>type</a> <router-link to="/src/target/block.go?s=5711:6107#L202">Commit</router-link></h2>
<pre><code class=language-go>type Commit struct {
    // NOTE: The Precommits are in order of address to preserve the bonded ValidatorSet order.
    // Any peer with a block can gossip precommits by index with a peer without recalculating the
    // active ValidatorSet.
    BlockID    BlockID `json:&quot;blockID&quot;`
    Precommits []*Vote `json:&quot;precommits&quot;`
    // contains filtered or unexported fields
}
</code></pre>
<p>NOTE: Commit is empty for height 1, but never nil.</p>
<h3><a name=Commit.BitArray>func</a> (*Commit) <router-link to="/src/target/block.go?s=6845:6887#L256">BitArray</router-link></h3>
<pre><code class=language-go>func (commit *Commit) BitArray() *BitArray
</code></pre>
<h3><a name=Commit.FirstPrecommit>func</a> (*Commit) <router-link to="/src/target/block.go?s=6109:6153#L215">FirstPrecommit</router-link></h3>
<pre><code class=language-go>func (commit *Commit) FirstPrecommit() *Vote
</code></pre>
<h3><a name=Commit.GetByIndex>func</a> (*Commit) <router-link to="/src/target/block.go?s=7106:7155#L266">GetByIndex</router-link></h3>
<pre><code class=language-go>func (commit *Commit) GetByIndex(index int) *Vote
</code></pre>
<h3><a name=Commit.Hash>func</a> (*Commit) <router-link to="/src/target/block.go?s=8295:8330#L311">Hash</router-link></h3>
<pre><code class=language-go>func (commit *Commit) Hash() []byte
</code></pre>
<h3><a name=Commit.Height>func</a> (*Commit) <router-link to="/src/target/block.go?s=6425:6459#L231">Height</router-link></h3>
<pre><code class=language-go>func (commit *Commit) Height() int
</code></pre>
<h3><a name=Commit.IsCommit>func</a> (*Commit) <router-link to="/src/target/block.go?s=7194:7231#L270">IsCommit</router-link></h3>
<pre><code class=language-go>func (commit *Commit) IsCommit() bool
</code></pre>
<h3><a name=Commit.Round>func</a> (*Commit) <router-link to="/src/target/block.go?s=6552:6585#L238">Round</router-link></h3>
<pre><code class=language-go>func (commit *Commit) Round() int
</code></pre>
<h3><a name=Commit.Size>func</a> (*Commit) <router-link to="/src/target/block.go?s=6742:6774#L249">Size</router-link></h3>
<pre><code class=language-go>func (commit *Commit) Size() int
</code></pre>
<h3><a name=Commit.StringIndented>func</a> (*Commit) <router-link to="/src/target/block.go?s=8559:8617#L322">StringIndented</router-link></h3>
<pre><code class=language-go>func (commit *Commit) StringIndented(indent string) string
</code></pre>
<h3><a name=Commit.Type>func</a> (*Commit) <router-link to="/src/target/block.go?s=6677:6710#L245">Type</router-link></h3>
<pre><code class=language-go>func (commit *Commit) Type() byte
</code></pre>
<h3><a name=Commit.ValidateBasic>func</a> (*Commit) <router-link to="/src/target/block.go?s=7302:7345#L277">ValidateBasic</router-link></h3>
<pre><code class=language-go>func (commit *Commit) ValidateBasic() error
</code></pre>
<h2><a name=Data>type</a> <router-link to="/src/target/block.go?s=9087:9354#L341">Data</router-link></h2>
<pre><code class=language-go>type Data struct {

    // Txs that will be applied by state @ block.Height+1.
    // NOTE: not all txs here are valid.  We&apos;re just agreeing on the order first.
    // This means that block.AppHash does not include these txs.
    Txs Txs `json:&quot;txs&quot;`
    // contains filtered or unexported fields
}
</code></pre>
<h3><a name=Data.Hash>func</a> (*Data) <router-link to="/src/target/block.go?s=9356:9387#L352">Hash</router-link></h3>
<pre><code class=language-go>func (data *Data) Hash() []byte
</code></pre>
<h3><a name=Data.StringIndented>func</a> (*Data) <router-link to="/src/target/block.go?s=9508:9562#L359">StringIndented</router-link></h3>
<pre><code class=language-go>func (data *Data) StringIndented(indent string) string
</code></pre>
<h2><a name=DefaultSigner>type</a> <router-link to="/src/target/priv_validator.go?s=1516:1566#L55">DefaultSigner</router-link></h2>
<pre><code class=language-go>type DefaultSigner struct {
    // contains filtered or unexported fields
}
</code></pre>
<p>Implements Signer</p>
<h3><a name=NewDefaultSigner>func</a> <router-link to="/src/target/priv_validator.go?s=1568:1625#L59">NewDefaultSigner</router-link></h3>
<pre><code class=language-go>func NewDefaultSigner(priv crypto.PrivKey) *DefaultSigner
</code></pre>
<h3><a name=DefaultSigner.Sign>func</a> (*DefaultSigner) <router-link to="/src/target/priv_validator.go?s=1687:1745#L64">Sign</router-link></h3>
<pre><code class=language-go>func (ds *DefaultSigner) Sign(msg []byte) crypto.Signature
</code></pre>
<p>Implements Signer</p>
<h2><a name=ErrVoteConflictingVotes>type</a> <router-link to="/src/target/vote.go?s=541:606#L11">ErrVoteConflictingVotes</router-link></h2>
<pre><code class=language-go>type ErrVoteConflictingVotes struct {
    VoteA *Vote
    VoteB *Vote
}
</code></pre>
<h3><a name=ErrVoteConflictingVotes.Error>func</a> (*ErrVoteConflictingVotes) <router-link to="/src/target/vote.go?s=608:658#L16">Error</router-link></h3>
<pre><code class=language-go>func (err *ErrVoteConflictingVotes) Error() string
</code></pre>
<h2><a name=EventCache>type</a> <router-link to="/src/target/events.go?s=3613:3661#L108">EventCache</router-link></h2>
<pre><code class=language-go>type EventCache interface {
    Fireable
    Flush()
}
</code></pre>
<h3><a name=NewEventCache>func</a> <router-link to="/src/target/events.go?s=3734:3781#L117">NewEventCache</router-link></h3>
<pre><code class=language-go>func NewEventCache(evsw EventSwitch) EventCache
</code></pre>
<h2><a name=EventDataNewBlock>type</a> <router-link to="/src/target/events.go?s=2362:2424#L55">EventDataNewBlock</router-link></h2>
<pre><code class=language-go>type EventDataNewBlock struct {
    Block *Block `json:&quot;block&quot;`
}
</code></pre>
<h3><a name=EventDataNewBlock.AssertIsTMEventData>func</a> (EventDataNewBlock) <router-link to="/src/target/events.go?s=3093:3141#L87">AssertIsTMEventData</router-link></h3>
<pre><code class=language-go>func (_ EventDataNewBlock) AssertIsTMEventData()
</code></pre>
<h2><a name=EventDataNewBlockHeader>type</a> <router-link to="/src/target/events.go?s=2465:2536#L60">EventDataNewBlockHeader</router-link></h2>
<pre><code class=language-go>type EventDataNewBlockHeader struct {
    Header *Header `json:&quot;header&quot;`
}
</code></pre>
<p>light weight event for benchmarking</p>
<h3><a name=EventDataNewBlockHeader.AssertIsTMEventData>func</a> (EventDataNewBlockHeader) <router-link to="/src/target/events.go?s=3151:3205#L88">AssertIsTMEventData</router-link></h3>
<pre><code class=language-go>func (_ EventDataNewBlockHeader) AssertIsTMEventData()
</code></pre>
<h2><a name=EventDataRoundState>type</a> <router-link to="/src/target/events.go?s=2848:3048#L74">EventDataRoundState</router-link></h2>
<pre><code class=language-go>type EventDataRoundState struct {
    Height int    `json:&quot;height&quot;`
    Round  int    `json:&quot;round&quot;`
    Step   string `json:&quot;step&quot;`

    // private, not exposed to websockets
    RoundState interface{} `json:&quot;-&quot;`
}
</code></pre>
<p>NOTE: This goes into the replay WAL</p>
<h3><a name=EventDataRoundState.AssertIsTMEventData>func</a> (EventDataRoundState) <router-link to="/src/target/events.go?s=3267:3317#L90">AssertIsTMEventData</router-link></h3>
<pre><code class=language-go>func (_ EventDataRoundState) AssertIsTMEventData()
</code></pre>
<h2><a name=EventDataTx>type</a> <router-link to="/src/target/events.go?s=2566:2807#L65">EventDataTx</router-link></h2>
<pre><code class=language-go>type EventDataTx struct {
    Tx    Tx            `json:&quot;tx&quot;`
    Data  []byte        `json:&quot;data&quot;`
    Log   string        `json:&quot;log&quot;`
    Code  abci.CodeType `json:&quot;code&quot;`
    Error string        `json:&quot;error&quot;` // this is redundant information for now
}
</code></pre>
<p>All txs fire EventDataTx</p>
<h3><a name=EventDataTx.AssertIsTMEventData>func</a> (EventDataTx) <router-link to="/src/target/events.go?s=3209:3251#L89">AssertIsTMEventData</router-link></h3>
<pre><code class=language-go>func (_ EventDataTx) AssertIsTMEventData()
</code></pre>
<h2><a name=EventDataVote>type</a> <router-link to="/src/target/events.go?s=3050:3091#L83">EventDataVote</router-link></h2>
<pre><code class=language-go>type EventDataVote struct {
    Vote *Vote
}
</code></pre>
<h3><a name=EventDataVote.AssertIsTMEventData>func</a> (EventDataVote) <router-link to="/src/target/events.go?s=3325:3369#L91">AssertIsTMEventData</router-link></h3>
<pre><code class=language-go>func (_ EventDataVote) AssertIsTMEventData()
</code></pre>
<h2><a name=EventSwitch>type</a> <router-link to="/src/target/events.go?s=3561:3611#L104">EventSwitch</router-link></h2>
<pre><code class=language-go>type EventSwitch interface {
    events.EventSwitch
}
</code></pre>
<h3><a name=NewEventSwitch>func</a> <router-link to="/src/target/events.go?s=3663:3696#L113">NewEventSwitch</router-link></h3>
<pre><code class=language-go>func NewEventSwitch() EventSwitch
</code></pre>
<h2><a name=Eventable>type</a> <router-link to="/src/target/events.go?s=3502:3559#L100">Eventable</router-link></h2>
<pre><code class=language-go>type Eventable interface {
    SetEventSwitch(EventSwitch)
}
</code></pre>
<h2><a name=Fireable>type</a> <router-link to="/src/target/events.go?s=3456:3500#L96">Fireable</router-link></h2>
<pre><code class=language-go>type Fireable interface {
    events.Fireable
}
</code></pre>
<h2><a name=GenesisDoc>type</a> <router-link to="/src/target/genesis.go?s=525:757#L15">GenesisDoc</router-link></h2>
<pre><code class=language-go>type GenesisDoc struct {
    GenesisTime time.Time          `json:&quot;genesis_time&quot;`
    ChainID     string             `json:&quot;chain_id&quot;`
    Validators  []GenesisValidator `json:&quot;validators&quot;`
    AppHash     []byte             `json:&quot;app_hash&quot;`
}
</code></pre>
<h3><a name=GenesisDocFromJSON>func</a> <router-link to="/src/target/genesis.go?s=1055:1127#L31">GenesisDocFromJSON</router-link></h3>
<pre><code class=language-go>func GenesisDocFromJSON(jsonBlob []byte) (genDoc *GenesisDoc, err error)
</code></pre>
<h3><a name=GenesisDoc.SaveAs>func</a> (*GenesisDoc) <router-link to="/src/target/genesis.go?s=814:865#L23">SaveAs</router-link></h3>
<pre><code class=language-go>func (genDoc *GenesisDoc) SaveAs(file string) error
</code></pre>
<p>Utility method for saving GenensisDoc as JSON file.</p>
<h2><a name=GenesisValidator>type</a> <router-link to="/src/target/genesis.go?s=378:523#L9">GenesisValidator</router-link></h2>
<pre><code class=language-go>type GenesisValidator struct {
    PubKey crypto.PubKey `json:&quot;pub_key&quot;`
    Amount int64         `json:&quot;amount&quot;`
    Name   string        `json:&quot;name&quot;`
}
</code></pre>
<h2><a name=Header>type</a> <router-link to="/src/target/block.go?s=3961:4582#L142">Header</router-link></h2>
<pre><code class=language-go>type Header struct {
    ChainID        string    `json:&quot;chain_id&quot;`
    Height         int       `json:&quot;height&quot;`
    Time           time.Time `json:&quot;time&quot;`
    NumTxs         int       `json:&quot;num_txs&quot;` // XXX: Can we get rid of this?
    LastBlockID    BlockID   `json:&quot;last_block_id&quot;`
    LastCommitHash []byte    `json:&quot;last_commit_hash&quot;` // commit from validators from the last block
    DataHash       []byte    `json:&quot;data_hash&quot;`        // transactions
    ValidatorsHash []byte    `json:&quot;validators_hash&quot;`  // validators for the current block
    AppHash        []byte    `json:&quot;app_hash&quot;`         // state after txs from the previous block
}
</code></pre>
<h3><a name=Header.Hash>func</a> (*Header) <router-link to="/src/target/block.go?s=4637:4667#L155">Hash</router-link></h3>
<pre><code class=language-go>func (h *Header) Hash() []byte
</code></pre>
<p>NOTE: hash is nil if required fields are missing.</p>
<h3><a name=Header.StringIndented>func</a> (*Header) <router-link to="/src/target/block.go?s=5049:5102#L172">StringIndented</router-link></h3>
<pre><code class=language-go>func (h *Header) StringIndented(indent string) string
</code></pre>
<h2><a name=Part>type</a> <router-link to="/src/target/part_set.go?s=363:530#L12">Part</router-link></h2>
<pre><code class=language-go>type Part struct {
    Index int                `json:&quot;index&quot;`
    Bytes []byte             `json:&quot;bytes&quot;`
    Proof merkle.SimpleProof `json:&quot;proof&quot;`
    // contains filtered or unexported fields
}
</code></pre>
<h3><a name=Part.Hash>func</a> (*Part) <router-link to="/src/target/part_set.go?s=532:563#L21">Hash</router-link></h3>
<pre><code class=language-go>func (part *Part) Hash() []byte
</code></pre>
<h3><a name=Part.String>func</a> (*Part) <router-link to="/src/target/part_set.go?s=743:776#L32">String</router-link></h3>
<pre><code class=language-go>func (part *Part) String() string
</code></pre>
<h3><a name=Part.StringIndented>func</a> (*Part) <router-link to="/src/target/part_set.go?s=814:868#L36">StringIndented</router-link></h3>
<pre><code class=language-go>func (part *Part) StringIndented(indent string) string
</code></pre>
<h2><a name=PartSet>type</a> <router-link to="/src/target/part_set.go?s=1663:1805#L72">PartSet</router-link></h2>
<pre><code class=language-go>type PartSet struct {
    // contains filtered or unexported fields
}
</code></pre>
<h3><a name=NewPartSetFromData>func</a> <router-link to="/src/target/part_set.go?s=1944:2003#L84">NewPartSetFromData</router-link></h3>
<pre><code class=language-go>func NewPartSetFromData(data []byte, partSize int) *PartSet
</code></pre>
<p>Returns an immutable, full PartSet from the data bytes.
The data bytes are split into &#x201C;partSize&#x201D; chunks, and merkle tree computed.</p>
<h3><a name=NewPartSetFromHeader>func</a> <router-link to="/src/target/part_set.go?s=2747:2803#L114">NewPartSetFromHeader</router-link></h3>
<pre><code class=language-go>func NewPartSetFromHeader(header PartSetHeader) *PartSet
</code></pre>
<p>Returns an empty PartSet ready to be populated.</p>
<h3><a name=PartSet.AddPart>func</a> (*PartSet) <router-link to="/src/target/part_set.go?s=3797:3862#L177">AddPart</router-link></h3>
<pre><code class=language-go>func (ps *PartSet) AddPart(part *Part, verify bool) (bool, error)
</code></pre>
<h3><a name=PartSet.BitArray>func</a> (*PartSet) <router-link to="/src/target/part_set.go?s=3310:3349#L143">BitArray</router-link></h3>
<pre><code class=language-go>func (ps *PartSet) BitArray() *BitArray
</code></pre>
<h3><a name=PartSet.Count>func</a> (*PartSet) <router-link to="/src/target/part_set.go?s=3631:3661#L163">Count</router-link></h3>
<pre><code class=language-go>func (ps *PartSet) Count() int
</code></pre>
<h3><a name=PartSet.GetPart>func</a> (*PartSet) <router-link to="/src/target/part_set.go?s=4376:4419#L205">GetPart</router-link></h3>
<pre><code class=language-go>func (ps *PartSet) GetPart(index int) *Part
</code></pre>
<h3><a name=PartSet.GetReader>func</a> (*PartSet) <router-link to="/src/target/part_set.go?s=4558:4598#L215">GetReader</router-link></h3>
<pre><code class=language-go>func (ps *PartSet) GetReader() io.Reader
</code></pre>
<h3><a name=PartSet.HasHeader>func</a> (*PartSet) <router-link to="/src/target/part_set.go?s=3169:3224#L135">HasHeader</router-link></h3>
<pre><code class=language-go>func (ps *PartSet) HasHeader(header PartSetHeader) bool
</code></pre>
<h3><a name=PartSet.Hash>func</a> (*PartSet) <router-link to="/src/target/part_set.go?s=3425:3457#L149">Hash</router-link></h3>
<pre><code class=language-go>func (ps *PartSet) Hash() []byte
</code></pre>
<h3><a name=PartSet.HashesTo>func</a> (*PartSet) <router-link to="/src/target/part_set.go?s=3511:3556#L156">HashesTo</router-link></h3>
<pre><code class=language-go>func (ps *PartSet) HashesTo(hash []byte) bool
</code></pre>
<h3><a name=PartSet.Header>func</a> (*PartSet) <router-link to="/src/target/part_set.go?s=3001:3042#L124">Header</router-link></h3>
<pre><code class=language-go>func (ps *PartSet) Header() PartSetHeader
</code></pre>
<h3><a name=PartSet.IsComplete>func</a> (*PartSet) <router-link to="/src/target/part_set.go?s=4487:4523#L211">IsComplete</router-link></h3>
<pre><code class=language-go>func (ps *PartSet) IsComplete() bool
</code></pre>
<h3><a name=PartSet.StringShort>func</a> (*PartSet) <router-link to="/src/target/part_set.go?s=5416:5455#L257">StringShort</router-link></h3>
<pre><code class=language-go>func (ps *PartSet) StringShort() string
</code></pre>
<h3><a name=PartSet.Total>func</a> (*PartSet) <router-link to="/src/target/part_set.go?s=3714:3744#L170">Total</router-link></h3>
<pre><code class=language-go>func (ps *PartSet) Total() int
</code></pre>
<h2><a name=PartSetHeader>type</a> <router-link to="/src/target/part_set.go?s=1091:1177#L49">PartSetHeader</router-link></h2>
<pre><code class=language-go>type PartSetHeader struct {
    Total int    `json:&quot;total&quot;`
    Hash  []byte `json:&quot;hash&quot;`
}
</code></pre>
<h3><a name=PartSetHeader.Equals>func</a> (PartSetHeader) <router-link to="/src/target/part_set.go?s=1355:1412#L62">Equals</router-link></h3>
<pre><code class=language-go>func (psh PartSetHeader) Equals(other PartSetHeader) bool
</code></pre>
<h3><a name=PartSetHeader.IsZero>func</a> (PartSetHeader) <router-link to="/src/target/part_set.go?s=1288:1326#L58">IsZero</router-link></h3>
<pre><code class=language-go>func (psh PartSetHeader) IsZero() bool
</code></pre>
<h3><a name=PartSetHeader.String>func</a> (PartSetHeader) <router-link to="/src/target/part_set.go?s=1179:1219#L54">String</router-link></h3>
<pre><code class=language-go>func (psh PartSetHeader) String() string
</code></pre>
<h3><a name=PartSetHeader.WriteSignBytes>func</a> (PartSetHeader) <router-link to="/src/target/part_set.go?s=1488:1560#L66">WriteSignBytes</router-link></h3>
<pre><code class=language-go>func (psh PartSetHeader) WriteSignBytes(w io.Writer, n *int, err *error)
</code></pre>
<h2><a name=PartSetReader>type</a> <router-link to="/src/target/part_set.go?s=4723:4802#L222">PartSetReader</router-link></h2>
<pre><code class=language-go>type PartSetReader struct {
    // contains filtered or unexported fields
}
</code></pre>
<h3><a name=NewPartSetReader>func</a> <router-link to="/src/target/part_set.go?s=4804:4855#L228">NewPartSetReader</router-link></h3>
<pre><code class=language-go>func NewPartSetReader(parts []*Part) *PartSetReader
</code></pre>
<h3><a name=PartSetReader.Read>func</a> (*PartSetReader) <router-link to="/src/target/part_set.go?s=4961:5020#L236">Read</router-link></h3>
<pre><code class=language-go>func (psr *PartSetReader) Read(p []byte) (n int, err error)
</code></pre>
<h2><a name=PrivValidator>type</a> <router-link to="/src/target/priv_validator.go?s=557:1241#L27">PrivValidator</router-link></h2>
<pre><code class=language-go>type PrivValidator struct {
    Address       []byte           `json:&quot;address&quot;`
    PubKey        crypto.PubKey    `json:&quot;pub_key&quot;`
    LastHeight    int              `json:&quot;last_height&quot;`
    LastRound     int              `json:&quot;last_round&quot;`
    LastStep      int8             `json:&quot;last_step&quot;`
    LastSignature crypto.Signature `json:&quot;last_signature&quot;` // so we dont lose signatures
    LastSignBytes []byte           `json:&quot;last_signbytes&quot;` // so we dont lose signatures

    // PrivKey should be empty if a Signer other than the default is being used.
    PrivKey crypto.PrivKey `json:&quot;priv_key&quot;`
    Signer  `json:&quot;-&quot;`
    // contains filtered or unexported fields
}
</code></pre>
<h3><a name=GenPrivValidator>func</a> <router-link to="/src/target/priv_validator.go?s=1899:1937#L73">GenPrivValidator</router-link></h3>
<pre><code class=language-go>func GenPrivValidator() *PrivValidator
</code></pre>
<p>Generates a new validator with private key.</p>
<h3><a name=LoadOrGenPrivValidator>func</a> <router-link to="/src/target/priv_validator.go?s=2884:2943#L107">LoadOrGenPrivValidator</router-link></h3>
<pre><code class=language-go>func LoadOrGenPrivValidator(filePath string) *PrivValidator
</code></pre>
<h3><a name=LoadPrivValidator>func</a> <router-link to="/src/target/priv_validator.go?s=2458:2512#L93">LoadPrivValidator</router-link></h3>
<pre><code class=language-go>func LoadPrivValidator(filePath string) *PrivValidator
</code></pre>
<h3><a name=PrivValidator.GetAddress>func</a> (*PrivValidator) <router-link to="/src/target/priv_validator.go?s=4092:4141#L156">GetAddress</router-link></h3>
<pre><code class=language-go>func (privVal *PrivValidator) GetAddress() []byte
</code></pre>
<h3><a name=PrivValidator.Reset>func</a> (*PrivValidator) <router-link to="/src/target/priv_validator.go?s=3906:3943#L147">Reset</router-link></h3>
<pre><code class=language-go>func (privVal *PrivValidator) Reset()
</code></pre>
<p>NOTE: Unsafe!</p>
<h3><a name=PrivValidator.Save>func</a> (*PrivValidator) <router-link to="/src/target/priv_validator.go?s=3489:3525#L128">Save</router-link></h3>
<pre><code class=language-go>func (privVal *PrivValidator) Save()
</code></pre>
<h3><a name=PrivValidator.SetFile>func</a> (*PrivValidator) <router-link to="/src/target/priv_validator.go?s=3352:3406#L122">SetFile</router-link></h3>
<pre><code class=language-go>func (privVal *PrivValidator) SetFile(filePath string)
</code></pre>
<h3><a name=PrivValidator.SetSigner>func</a> (*PrivValidator) <router-link to="/src/target/priv_validator.go?s=1777:1826#L68">SetSigner</router-link></h3>
<pre><code class=language-go>func (privVal *PrivValidator) SetSigner(s Signer)
</code></pre>
<h3><a name=PrivValidator.SignProposal>func</a> (*PrivValidator) <router-link to="/src/target/priv_validator.go?s=4522:4606#L171">SignProposal</router-link></h3>
<pre><code class=language-go>func (privVal *PrivValidator) SignProposal(chainID string, proposal *Proposal) error
</code></pre>
<h3><a name=PrivValidator.SignVote>func</a> (*PrivValidator) <router-link to="/src/target/priv_validator.go?s=4171:4243#L160">SignVote</router-link></h3>
<pre><code class=language-go>func (privVal *PrivValidator) SignVote(chainID string, vote *Vote) error
</code></pre>
<h3><a name=PrivValidator.String>func</a> (*PrivValidator) <router-link to="/src/target/priv_validator.go?s=6462:6507#L231">String</router-link></h3>
<pre><code class=language-go>func (privVal *PrivValidator) String() string
</code></pre>
<h2><a name=PrivValidatorsByAddress>type</a> <router-link to="/src/target/priv_validator.go?s=6689:6734#L237">PrivValidatorsByAddress</router-link></h2>
<pre><code class=language-go>type PrivValidatorsByAddress []*PrivValidator
</code></pre>
<h3><a name=PrivValidatorsByAddress.Len>func</a> (PrivValidatorsByAddress) <router-link to="/src/target/priv_validator.go?s=6736:6780#L239">Len</router-link></h3>
<pre><code class=language-go>func (pvs PrivValidatorsByAddress) Len() int
</code></pre>
<h3><a name=PrivValidatorsByAddress.Less>func</a> (PrivValidatorsByAddress) <router-link to="/src/target/priv_validator.go?s=6803:6857#L243">Less</router-link></h3>
<pre><code class=language-go>func (pvs PrivValidatorsByAddress) Less(i, j int) bool
</code></pre>
<h3><a name=PrivValidatorsByAddress.Swap>func</a> (PrivValidatorsByAddress) <router-link to="/src/target/priv_validator.go?s=6923:6972#L247">Swap</router-link></h3>
<pre><code class=language-go>func (pvs PrivValidatorsByAddress) Swap(i, j int)
</code></pre>
<h2><a name=Proposal>type</a> <router-link to="/src/target/proposal.go?s=324:712#L8">Proposal</router-link></h2>
<pre><code class=language-go>type Proposal struct {
    Height           int              `json:&quot;height&quot;`
    Round            int              `json:&quot;round&quot;`
    BlockPartsHeader PartSetHeader    `json:&quot;block_parts_header&quot;`
    POLRound         int              `json:&quot;pol_round&quot;`    // -1 if null.
    POLBlockID       BlockID          `json:&quot;pol_block_id&quot;` // zero if null.
    Signature        crypto.Signature `json:&quot;signature&quot;`
}
</code></pre>
<h3><a name=NewProposal>func</a> <router-link to="/src/target/proposal.go?s=746:861#L18">NewProposal</router-link></h3>
<pre><code class=language-go>func NewProposal(height int, round int, blockPartsHeader PartSetHeader, polRound int, polBlockID BlockID) *Proposal
</code></pre>
<p>polRound: -1 if no polRound.</p>
<h3><a name=Proposal.String>func</a> (*Proposal) <router-link to="/src/target/proposal.go?s=1044:1078#L28">String</router-link></h3>
<pre><code class=language-go>func (p *Proposal) String() string
</code></pre>
<h3><a name=Proposal.WriteSignBytes>func</a> (*Proposal) <router-link to="/src/target/proposal.go?s=1217:1299#L33">WriteSignBytes</router-link></h3>
<pre><code class=language-go>func (p *Proposal) WriteSignBytes(chainID string, w io.Writer, n *int, err *error)
</code></pre>
<h2><a name=Signable>type</a> <router-link to="/src/target/signable.go?s=223:315#L3">Signable</router-link></h2>
<pre><code class=language-go>type Signable interface {
    WriteSignBytes(chainID string, w io.Writer, n *int, err *error)
}
</code></pre>
<p>Signable is an interface for all signable things.
It typically removes signatures before serializing.</p>
<h2><a name=Signer>type</a> <router-link to="/src/target/priv_validator.go?s=1433:1493#L50">Signer</router-link></h2>
<pre><code class=language-go>type Signer interface {
    Sign(msg []byte) crypto.Signature
}
</code></pre>
<p>This is used to sign votes.
It is the caller&#x2019;s duty to verify the msg before calling Sign,
eg. to avoid double signing.
Currently, the only callers are SignVote and SignProposal</p>
<h2><a name=TMEventData>type</a> <router-link to="/src/target/events.go?s=1466:1537#L27">TMEventData</router-link></h2>
<pre><code class=language-go>type TMEventData interface {
    events.EventData
    AssertIsTMEventData()
}
</code></pre>
<p>implements events.EventData</p>
<h2><a name=Tx>type</a> <router-link to="/src/target/tx.go?s=62:76#L1">Tx</router-link></h2>
<pre><code class=language-go>type Tx []byte
</code></pre>
<h3><a name=Tx.Hash>func</a> (Tx) <router-link to="/src/target/tx.go?s=329:355#L3">Hash</router-link></h3>
<pre><code class=language-go>func (tx Tx) Hash() []byte
</code></pre>
<p>NOTE: this is the hash of the go-wire encoded Tx.
Tx has no types at this level, so just length-prefixed.
Alternatively, it may make sense to add types here and let
[]byte be type 0x1 so we can have versioned txs if need be in the future.</p>
<h2><a name=Txs>type</a> <router-link to="/src/target/tx.go?s=401:414#L7">Txs</router-link></h2>
<pre><code class=language-go>type Txs []Tx
</code></pre>
<h3><a name=Txs.Hash>func</a> (Txs) <router-link to="/src/target/tx.go?s=416:444#L9">Hash</router-link></h3>
<pre><code class=language-go>func (txs Txs) Hash() []byte
</code></pre>
<h2><a name=Validator>type</a> <router-link to="/src/target/validator.go?s=304:508#L6">Validator</router-link></h2>
<pre><code class=language-go>type Validator struct {
    Address     []byte        `json:&quot;address&quot;`
    PubKey      crypto.PubKey `json:&quot;pub_key&quot;`
    VotingPower int64         `json:&quot;voting_power&quot;`
    Accum       int64         `json:&quot;accum&quot;`
}
</code></pre>
<p>Volatile state for each Validator
TODO: make non-volatile identity</p>
<pre><code>- Remove Accum - it can be computed, and now valset becomes identifying
</code></pre>
<h3><a name=NewValidator>func</a> <router-link to="/src/target/validator.go?s=510:579#L13">NewValidator</router-link></h3>
<pre><code class=language-go>func NewValidator(pubKey crypto.PubKey, votingPower int64) *Validator
</code></pre>
<h3><a name=RandValidator>func</a> <router-link to="/src/target/validator.go?s=2213:2292#L87">RandValidator</router-link></h3>
<pre><code class=language-go>func RandValidator(randPower bool, minPower int64) (*Validator, *PrivValidator)
</code></pre>
<h3><a name=Validator.CompareAccum>func</a> (*Validator) <router-link to="/src/target/validator.go?s=917:978#L30">CompareAccum</router-link></h3>
<pre><code class=language-go>func (v *Validator) CompareAccum(other *Validator) *Validator
</code></pre>
<p>Returns the one with higher Accum.</p>
<h3><a name=Validator.Copy>func</a> (*Validator) <router-link to="/src/target/validator.go?s=808:845#L24">Copy</router-link></h3>
<pre><code class=language-go>func (v *Validator) Copy() *Validator
</code></pre>
<p>Creates a new copy of the validator so we can mutate accum.
Panics if the validator is nil.</p>
<h3><a name=Validator.Hash>func</a> (*Validator) <router-link to="/src/target/validator.go?s=1527:1560#L61">Hash</router-link></h3>
<pre><code class=language-go>func (v *Validator) Hash() []byte
</code></pre>
<h3><a name=Validator.String>func</a> (*Validator) <router-link to="/src/target/validator.go?s=1339:1374#L50">String</router-link></h3>
<pre><code class=language-go>func (v *Validator) String() string
</code></pre>
<h2><a name=ValidatorSet>type</a> <router-link to="/src/target/validator_set.go?s=734:915#L14">ValidatorSet</router-link></h2>
<pre><code class=language-go>type ValidatorSet struct {
    Validators []*Validator // NOTE: persisted via reflect, must be exported.
    // contains filtered or unexported fields
}
</code></pre>
<p>ValidatorSet represent a set of *Validator at a given height.
The validators can be fetched by address or index.
The index is in order of .Address, so the indices are fixed
for all rounds of a given blockchain height.
On the other hand, the .AccumPower of each validator and
the designated .Proposer() of a set changes every round,
upon calling .IncrementAccum().
NOTE: Not goroutine-safe.
NOTE: All get/set to validators should copy the value for safety.
TODO: consider validator Accum overflow
TODO: move valset into an iavl tree where key is &#x2018;blockbonded|pubkey&#x2019;</p>
<h3><a name=NewValidatorSet>func</a> <router-link to="/src/target/validator_set.go?s=917:970#L22">NewValidatorSet</router-link></h3>
<pre><code class=language-go>func NewValidatorSet(vals []*Validator) *ValidatorSet
</code></pre>
<h3><a name=RandValidatorSet>func</a> <router-link to="/src/target/validator_set.go?s=9650:9743#L329">RandValidatorSet</router-link></h3>
<pre><code class=language-go>func RandValidatorSet(numValidators int, votingPower int64) (*ValidatorSet, []*PrivValidator)
</code></pre>
<p>NOTE: PrivValidator are in order.</p>
<h3><a name=ValidatorSet.Add>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=4027:4087#L130">Add</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) Add(val *Validator) (added bool)
</code></pre>
<h3><a name=ValidatorSet.Copy>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=1944:1992#L58">Copy</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) Copy() *ValidatorSet
</code></pre>
<h3><a name=ValidatorSet.GetByAddress>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=2630:2714#L78">GetByAddress</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) GetByAddress(address []byte) (index int, val *Validator)
</code></pre>
<h3><a name=ValidatorSet.GetByIndex>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=3026:3108#L89">GetByIndex</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) GetByIndex(index int) (address []byte, val *Validator)
</code></pre>
<h3><a name=ValidatorSet.HasAddress>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=2330:2389#L71">HasAddress</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) HasAddress(address []byte) bool
</code></pre>
<h3><a name=ValidatorSet.Hash>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=3753:3794#L119">Hash</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) Hash() []byte
</code></pre>
<h3><a name=ValidatorSet.IncrementAccum>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=1304:1357#L39">IncrementAccum</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) IncrementAccum(times int)
</code></pre>
<p>TODO: mind the overflow when times and votingPower shares too large.</p>
<h3><a name=ValidatorSet.Iterate>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=5846:5922#L189">Iterate</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) Iterate(fn func(index int, val *Validator) bool)
</code></pre>
<h3><a name=ValidatorSet.Proposer>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=3473:3533#L107">Proposer</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) Proposer() (proposer *Validator)
</code></pre>
<h3><a name=ValidatorSet.Remove>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=5160:5241#L169">Remove</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) Remove(address []byte) (val *Validator, removed bool)
</code></pre>
<h3><a name=ValidatorSet.Size>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=3178:3216#L94">Size</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) Size() int
</code></pre>
<h3><a name=ValidatorSet.String>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=8327:8370#L271">String</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) String() string
</code></pre>
<h3><a name=ValidatorSet.StringIndented>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=8410:8474#L275">StringIndented</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) StringIndented(indent string) string
</code></pre>
<h3><a name=ValidatorSet.TotalVotingPower>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=3253:3305#L98">TotalVotingPower</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) TotalVotingPower() int64
</code></pre>
<h3><a name=ValidatorSet.Update>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=4858:4923#L156">Update</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) Update(val *Validator) (updated bool)
</code></pre>
<h3><a name=ValidatorSet.VerifyCommit>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=6087:6194#L199">VerifyCommit</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) VerifyCommit(chainID string, blockID BlockID, height int, commit *Commit) error
</code></pre>
<p>Verify that +2/3 of the set had signed the given signBytes</p>
<h3><a name=ValidatorSet.VerifyCommitAny>func</a> (*ValidatorSet) <router-link to="/src/target/validator_set.go?s=7832:7942#L247">VerifyCommitAny</router-link></h3>
<pre><code class=language-go>func (valSet *ValidatorSet) VerifyCommitAny(chainID string, blockID BlockID, height int, commit *Commit) error
</code></pre>
<p>Verify that +2/3 of this set had signed the given signBytes.
Unlike VerifyCommit(), this function can verify commits with differeent sets.</p>
<h2><a name=ValidatorsByAddress>type</a> <router-link to="/src/target/validator_set.go?s=8972:9009#L299">ValidatorsByAddress</router-link></h2>
<pre><code class=language-go>type ValidatorsByAddress []*Validator
</code></pre>
<h3><a name=ValidatorsByAddress.Len>func</a> (ValidatorsByAddress) <router-link to="/src/target/validator_set.go?s=9011:9050#L301">Len</router-link></h3>
<pre><code class=language-go>func (vs ValidatorsByAddress) Len() int
</code></pre>
<h3><a name=ValidatorsByAddress.Less>func</a> (ValidatorsByAddress) <router-link to="/src/target/validator_set.go?s=9072:9121#L305">Less</router-link></h3>
<pre><code class=language-go>func (vs ValidatorsByAddress) Less(i, j int) bool
</code></pre>
<h3><a name=ValidatorsByAddress.Swap>func</a> (ValidatorsByAddress) <router-link to="/src/target/validator_set.go?s=9185:9229#L309">Swap</router-link></h3>
<pre><code class=language-go>func (vs ValidatorsByAddress) Swap(i, j int)
</code></pre>
<h2><a name=Vote>type</a> <router-link to="/src/target/vote.go?s=1065:1488#L39">Vote</router-link></h2>
<pre><code class=language-go>type Vote struct {
    ValidatorAddress []byte           `json:&quot;validator_address&quot;`
    ValidatorIndex   int              `json:&quot;validator_index&quot;`
    Height           int              `json:&quot;height&quot;`
    Round            int              `json:&quot;round&quot;`
    Type             byte             `json:&quot;type&quot;`
    BlockID          BlockID          `json:&quot;block_id&quot;` // zero if vote is nil.
    Signature        crypto.Signature `json:&quot;signature&quot;`
}
</code></pre>
<p>Represents a prevote, precommit, or commit vote from validators for consensus.</p>
<h3><a name=Vote.Copy>func</a> (*Vote) <router-link to="/src/target/vote.go?s=1665:1695#L56">Copy</router-link></h3>
<pre><code class=language-go>func (vote *Vote) Copy() *Vote
</code></pre>
<h3><a name=Vote.String>func</a> (*Vote) <router-link to="/src/target/vote.go?s=1738:1771#L61">String</router-link></h3>
<pre><code class=language-go>func (vote *Vote) String() string
</code></pre>
<h3><a name=Vote.WriteSignBytes>func</a> (*Vote) <router-link to="/src/target/vote.go?s=1490:1571#L49">WriteSignBytes</router-link></h3>
<pre><code class=language-go>func (vote *Vote) WriteSignBytes(chainID string, w io.Writer, n *int, err *error)
</code></pre>
<h2><a name=VoteSet>type</a> <router-link to="/src/target/vote_set.go?s=1586:2119#L36">VoteSet</router-link></h2>
<pre><code class=language-go>type VoteSet struct {
    // contains filtered or unexported fields
}
</code></pre>
<p>VoteSet helps collect signatures from validators at each height+round for a
predefined vote type.</p>
<p>We need VoteSet to be able to keep track of conflicting votes when validators
double-sign.  Yet, we can&#x2019;t keep track of <em>all</em> the votes seen, as that could
be a DoS attack vector.</p>
<p>There are two storage areas for votes.</p>
<ol>
<li>voteSet.votes</li>
<li>voteSet.votesByBlock</li>
</ol>
<p><code>.votes</code> is the &#x201C;canonical&#x201D; list of votes.  It always has at least one vote,
if a vote from a validator had been seen at all.  Usually it keeps track of
the first vote seen, but when a 2/3 majority is found, votes for that get
priority and are copied over from <code>.votesByBlock</code>.</p>
<p><code>.votesByBlock</code> keeps track of a list of votes for a particular block.  There
are two ways a &amp;blockVotes{} gets created in <code>.votesByBlock</code>.</p>
<ol>
<li>the first vote seen by a validator was for the particular block.</li>
<li>a peer claims to have seen 2/3 majority for the particular block.</li>
</ol>
<p>Since the first vote from a validator will always get added in <code>.votesByBlock</code>
, all votes in <code>.votes</code> will have a corresponding entry in <code>.votesByBlock</code>.</p>
<p>When a &amp;blockVotes{} in <code>.votesByBlock</code> reaches a 2/3 majority quorum, its
votes are copied into <code>.votes</code>.</p>
<p>All this is memory bounded because conflicting votes only get added if a peer
told us to track that block, each peer only gets to tell us 1 such block, and,
there&#x2019;s only a limited number of peers.</p>
<p>NOTE: Assumes that the sum total of voting power does not exceed MaxUInt64.</p>
<h3><a name=NewVoteSet>func</a> <router-link to="/src/target/vote_set.go?s=2205:2302#L53">NewVoteSet</router-link></h3>
<pre><code class=language-go>func NewVoteSet(chainID string, height int, round int, type_ byte, valSet *ValidatorSet) *VoteSet
</code></pre>
<p>Constructs a new VoteSet struct used to accumulate votes for given height/round.</p>
<h3><a name=VoteSet.AddVote>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=3699:3766#L116">AddVote</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) AddVote(vote *Vote) (added bool, err error)
</code></pre>
<p>Returns added=true if vote is valid and new.
Otherwise returns err=ErrVote[</p>
<pre><code>UnexpectedStep | InvalidIndex | InvalidAddress |
InvalidSignature | InvalidBlockHash | ConflictingVotes ]
</code></pre>
<p>Duplicate votes return added=false, err=nil.
Conflicting votes return added=*, err=ErrVoteConflictingVotes.
NOTE: vote should not be mutated after adding.
NOTE: VoteSet must not be nil</p>
<h3><a name=VoteSet.BitArray>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=9430:9474#L309">BitArray</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) BitArray() *BitArray
</code></pre>
<h3><a name=VoteSet.BitArrayByBlockID>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=9602:9670#L318">BitArrayByBlockID</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) BitArrayByBlockID(blockID BlockID) *BitArray
</code></pre>
<h3><a name=VoteSet.ChainID>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=2787:2827#L72">ChainID</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) ChainID() string
</code></pre>
<h3><a name=VoteSet.GetByAddress>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=10127:10185#L341">GetByAddress</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) GetByAddress(address []byte) *Vote
</code></pre>
<h3><a name=VoteSet.GetByIndex>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=9950:10004#L332">GetByIndex</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) GetByIndex(valIndex int) *Vote
</code></pre>
<p>NOTE: if validator has conflicting votes, returns &#x201C;canonical&#x201D; vote</p>
<h3><a name=VoteSet.HasAll>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=11027:11064#L384">HasAll</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) HasAll() bool
</code></pre>
<h3><a name=VoteSet.HasTwoThirdsAny>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=10828:10874#L375">HasTwoThirdsAny</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) HasTwoThirdsAny() bool
</code></pre>
<h3><a name=VoteSet.HasTwoThirdsMajority>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=10435:10486#L354">HasTwoThirdsMajority</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) HasTwoThirdsMajority() bool
</code></pre>
<h3><a name=VoteSet.Height>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=2857:2893#L76">Height</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) Height() int
</code></pre>
<h3><a name=VoteSet.IsCommit>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=10608:10647#L363">IsCommit</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) IsCommit() bool
</code></pre>
<h3><a name=VoteSet.MakeCommit>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=12591:12635#L445">MakeCommit</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) MakeCommit() *Commit
</code></pre>
<h3><a name=VoteSet.Round>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=2968:3003#L84">Round</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) Round() int
</code></pre>
<h3><a name=VoteSet.SetPeerMaj23>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=8534:8602#L274">SetPeerMaj23</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) SetPeerMaj23(peerID string, blockID BlockID)
</code></pre>
<p>If a peer claims that it has 2/3 majority for given blockKey, call this.
NOTE: if there are too many peers, or too much peer churn,
this can cause memory issues.
TODO: implement ability to remove peers too
NOTE: VoteSet must not be nil</p>
<h3><a name=VoteSet.Size>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=3190:3224#L100">Size</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) Size() int
</code></pre>
<h3><a name=VoteSet.String>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=11541:11580#L403">String</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) String() string
</code></pre>
<h3><a name=VoteSet.StringIndented>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=11668:11728#L410">StringIndented</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) StringIndented(indent string) string
</code></pre>
<h3><a name=VoteSet.StringShort>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=12185:12229#L432">StringShort</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) StringShort() string
</code></pre>
<h3><a name=VoteSet.TwoThirdsMajority>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=11271:11341#L390">TwoThirdsMajority</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) TwoThirdsMajority() (blockID BlockID, ok bool)
</code></pre>
<p>Returns either a blockhash (or nil) that received +2/3 majority.
If there exists no such majority, returns (nil, PartSetHeader{}, false).</p>
<h3><a name=VoteSet.Type>func</a> (*VoteSet) <router-link to="/src/target/vote_set.go?s=3078:3113#L92">Type</router-link></h3>
<pre><code class=language-go>func (voteSet *VoteSet) Type() byte
</code></pre>
<h2><a name=VoteSetReader>type</a> <router-link to="/src/target/vote_set.go?s=14405:14551#L509">VoteSetReader</router-link></h2>
<pre><code class=language-go>type VoteSetReader interface {
    Height() int
    Round() int
    Type() byte
    Size() int
    BitArray() *BitArray
    GetByIndex(int) *Vote
    IsCommit() bool
}
</code></pre>
<p>Common interface between *consensus.VoteSet and types.Commit</p>
<hr>
<p>Generated by <a href=http://godoc.org/github.com/davecheney/godoc2md>godoc2md</a></p>
</div></template>
