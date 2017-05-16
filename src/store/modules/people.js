const state = {
  all: [
    {
      slug: 'jae-kwon',
      name: 'Jae Kwon',
      title: 'CEO & Founder',
      bio: 'Jae Kwon created Tendermint to save the world from needlessly wasting electricity to secure distributed ledgers. Along the way he realized that using quorums and cryptography instead of energy and hashing affords many advantages such as speed and scalability.',
      ids: {
        email: 'jae',
        github: 'jaekwon',
        keybase: 'jaekwon',
        linkedin: 'yjkwon',
        twitter: 'jaekwon'
      },
      category: 'member'
    },
    {
      slug: 'ethan-buchman',
      name: 'Ethan Buchman',
      title: 'CTO & Cofounder',
      bio: 'Ethan sees consensus algorithms as a 21st century means for promoting social cohesion. He is driven to empower humans with new ways to coordinate and reach agreement at scale.',
      ids: {
        email: 'ethan',
        github: 'ebuchman',
        keybase: 'ebuchman',
        linkedin: 'ethan-buchman-10b34944',
        twitter: 'buchmanster'
      },
      category: 'member'
    },
    {
      slug: 'peng-zhong',
      name: 'Peng Zhong',
      title: 'CDO',
      bio: 'Peng aims to dramatically increase blockchain adoption through better usability design. He hopes to to turning cutting-edge technology into mundane things that everyone can use.',
      ids: {
        email: 'peng',
        github: 'nylira',
        keybase: 'peng',
        linkedin: 'nylira',
        twitter: 'zcpeng'
      },
      category: 'member'
    },
    {
      slug: 'brian-crain',
      name: 'Brian Fabian Crain',
      title: 'COO',
      bio: 'For Brian distributed ledger combined interests in economics, game theory, technology and visions of a radically different future. In Tendermint, he wants to walk the tightrope between pragmatism and idealism.',
      ids: {
        email: 'brian',
        github: 'crainbf',
        keybase: 'crainbf',
        linkedin: 'bfcrain',
        twitter: 'crainbf'
      },
      category: 'member'
    },
    {
      slug: 'anton-kaliaev',
      name: 'Anton Kaliaev',
      title: 'Software Engineer',
      bio: 'Anton is a software engineer with more than 6 years of experience. He has worked in web, video processing, and telecom industries and has extensive knowledge, which he hopes will help him make Tendermint better. Always passionate about learning. Loves occasional traveling and enjoys writing his own blog.',
      ids: {
        email: 'anton',
        github: 'melekes',
        keybase: 'melekes',
        linkedin: 'melekes',
        twitter: 'akaliaev'
      },
      category: 'member'
    },
    {
      slug: 'ethan-frey',
      name: 'Ethan Frey',
      title: 'Software Engineer',
      bio: 'Ethan has many years of experience in backend web development, and looks to bring all the tooling we enjoy from the web to help everyone build powerful blockchain applications based on tendermint. And along the way disrupt an industry or two…',
      ids: {
        email: 'ethanfrey',
        github: 'ethanfrey',
        keybase: 'ethanfrey',
        linkedin: 'ethanfrey'
      },
      category: 'member'
    },
    {
      slug: 'hannah-copperman',
      name: 'Hannah Copperman',
      title: 'Hiring Manager',
      bio: 'Hannah is helping Tendermint build the best team possible.',
      ids: {
        email: 'hannah',
        github: 'hcopperm',
        linkedin: 'hannah-copperman-b47b4614'
      },
      category: 'member'
    },
    {
      slug: 'matt-bell',
      name: 'Matt Bell',
      title: 'Software Engineer',
      bio: 'Matt has been working in the cryptocurrency space since 2011. He believes blockchain technologies like Tendermint will transform the world the same way the internet did.',
      ids: {
        email: 'matt',
        github: 'mappum',
        keybase: 'mappum',
        linkedin: 'matt-bell-941aa146',
        twitter: 'mappum'
      },
      category: 'member'
    },
    {
      slug: 'rigel-rozanski',
      name: 'Rigel Rozanski',
      title: 'Software Engineer',
      bio: 'Rigel is inspired by blockchain as a means of reducing entropy as the interactions of technology grow to manifold complexities. His interests lie in the crossroads between blockchain and the geospatial realm.',
      ids: {
        email: 'rigel',
        github: 'rigelrozanski',
        keybase: 'rigel',
        linkedin: 'rigel-rozanski-28340559'
      },
      category: 'member'
    },
    {
      slug: 'paul-homer',
      name: 'Paul Homer',
      title: 'Software Engineer',
      bio: 'Paul is an experienced software developer with a long history of building sophisticated commercial products. He desires to leverage his experiences to help Tendermint become a reliable part of the world\'s technology infrastructure.',
      ids: {
        email: 'paul',
        github: 'phomer',
        linkedin: 'paulhomer'
      },
      category: 'member'
    },
    {
      slug: 'adrian-brink',
      name: 'Adrian Brink',
      title: 'Software Engineer',
      bio: 'Adrian is a software engineer that aims to bring the cryptocurrency revolution to the masses. Broad adoption and ubiquitousness will drive the change we want to see.',
      ids: {
        email: 'adrian',
        github: 'adrianbrink',
        keybase: 'adrianbrink',
        linkedin: 'adrianbrink',
        twitter: 'adrian_brink'
      },
      category: 'member'
    },
    {
      slug: 'henny-han',
      name: 'Ash Han',
      title: 'Advisor',
      bio: 'Ash Han is a founder of Finector, a leading research/consulting firm specialized in distributed ledger technology. He is an advisor of various blockchain-related startups such as Tendermint and Chronobank.io and also an author of multiple books and papers on blockchain.',
      category: 'advisor',
      ids: {
        email: 'ashhan',
        linkedin: 'ashhan',
        website: 'seunghwanhan.com'
      }
    },
    {
      slug: 'franck-mikulecz',
      name: 'Franck Mikulecz',
      title: 'Advisor',
      bio: 'Franck is founder and CEO of BAXTER, a group of companies focused on foreign exchange and technology. Having spent years in a market perpetually dominated by Banks, Franck feels the urge to help deliver the "disruption" promise of the Blockchain. With FXCH Ltd, a Clearing and Settlement startup, his goal is simply to drag FX, screaming and kicking into the cryptocurrency era.',
      category: 'advisor',
      ids: {
        linkedin: 'franckmikulecz',
        twitter: 'franckmikulecz'
      }
    },
    {
      slug: 'thomas-greco',
      name: 'Thomas Greco',
      title: 'Advisor',
      bio: 'Thomas Greco is Special Advisor to Omise (おみせ), an Asia-Pacific fintech company developing solutions that can add value to a financially disintermediated future. He also served as a special advisor to the Ethereum Foundation.',
      ids: {
        website: 'omise.co'
      },
      category: 'advisor'
    },
    {
      slug: 'jim-yang',
      name: 'Jim Yang',
      title: 'Strategy',
      bio: 'Jim Yang co-founded Identyx, where he served as CEO until its acquisition by Red Hat. Identyx developed an open source enterprise identity management software.',
      category: 'advisor',
      ids: {
        linkedin: 'jimyang'
      }
    }
  ]
}

export default {
  state
}
