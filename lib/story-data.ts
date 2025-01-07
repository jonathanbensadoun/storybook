
import { StoryNode } from './types';

export const catStoryNodes: Record<string, StoryNode> = {
  start: {
    id: 'start-cat',
    content: "Tu te réveilles dans une forêt magique baignée de lumière dorée. Devant toi se trouvent trois chemins mystérieux : un sentier couvert de champignons lumineux, un ruisseau aux eaux scintillantes, et un escalier fait de racines d'arbres. Une brise douce semble chuchoter ton nom, comme si la forêt attendait quelque chose de toi.",
    choices: [
      {
        text: "Suivre le sentier aux champignons lumineux",
        nextNodeId: 'champignons'
      },
      {
        text: "Longer le ruisseau scintillant",
        nextNodeId: 'ruisseau'
      },
      {
        text: "Monter l'escalier de racines",
        nextNodeId: 'escalier'
      }
    ],
    isEnding: false
  },
  champignons: {
    id: 'champignons',
    content: "Les champignons s'illuminent à ton passage, révélant une fée blessée, une porte miniature dans un arbre, et un livre de sorts abandonné. Chaque pas déclenche une douce mélodie, comme si les champignons racontaient une histoire oubliée.",
    choices: [
      {
        text: "Aider la fée blessée",
        nextNodeId: 'fee'
      },
      {
        text: "Explorer la porte miniature",
        nextNodeId: 'porte_miniature'
      },
      {
        text: "Lire le livre de sorts",
        nextNodeId: 'livre_sorts'
      }
    ],
    isEnding: false
  },
  ruisseau: {
    id: 'ruisseau',
    content: "Le ruisseau mène à un étang magique où tu aperçois un poisson doré qui parle, un coffre immergé brillant, et un pont de cristal. L'eau murmure des secrets, évoquant un passé où les dieux de la nature vivaient encore parmi les mortels.",
    choices: [
      {
        text: "Parler au poisson doré",
        nextNodeId: 'poisson'
      },
      {
        text: "Plonger vers le coffre brillant",
        nextNodeId: 'coffre'
      },
      {
        text: "Traverser le pont de cristal",
        nextNodeId: 'pont'
      }
    ],
    isEnding: false
  },
  escalier: {
    id: 'escalier',
    content: "Au sommet de l'escalier, tu découvres une cabane dans les arbres, un nid d'aigle géant, et un portail mystérieux fait de lumière. Chaque marche semble contenir une énergie ancienne, te poussant doucement à avancer.",
    choices: [
      {
        text: "Entrer dans la cabane",
        nextNodeId: 'cabane'
      },
      {
        text: "Grimper jusqu'au nid d'aigle",
        nextNodeId: 'nid'
      },
      {
        text: "Traverser le portail lumineux",
        nextNodeId: 'portail'
      }
    ],
    isEnding: false
  },
  fee: {
    id: 'fee',
    content: "La fée guérie te remercie en t'offrant le don de voler ! En découvrant les cieux, tu aperçois d'autres royaumes magiques et deviens le gardien des créatures enchantées. La forêt, apaisée, semble chanter en ton honneur.",
    choices: [],
    isEnding: true
  },
  porte_miniature: {
    id: 'porte_miniature',
    content: "Tu rapetisses magiquement et découvres une ville miniature secrète où tu es accueilli comme un héros légendaire. Les habitants t'offrent un festin en remerciement d'avoir franchi la porte interdite et sauvé leur royaume de l'oubli.",
    choices: [],
    isEnding: true
  },
  livre_sorts: {
    id: 'livre_sorts',
    content: "Le livre t'enseigne la magie et tu deviens un puissant magicien de la forêt enchantée. Chaque sort appris semble réveiller une partie de la forêt qui dormait depuis des siècles.",
    choices: [],
    isEnding: true
  },
  poisson: {
    id: 'poisson',
    content: "Le poisson doré te confie le pouvoir de respirer sous l'eau et tu découvres un royaume aquatique merveilleux où les créatures marines t'accueillent comme un messager des étoiles.",
    choices: [],
    isEnding: true
  },
  coffre: {
    id: 'coffre',
    content: "Dans le coffre, tu trouves une carte au trésor magique qui te mène à un trésor qui exauce tous tes vœux. Chaque pas de ton voyage est une aventure remplie de merveilles.",
    choices: [],
    isEnding: true
  },
  pont: {
    id: 'pont',
    content: "Le pont te conduit à une île flottante où tu rencontres des dragons amicaux. Ils te choisissent comme allié, et ensemble, vous explorez les mystères des mondes cachés.",
    choices: [],
    isEnding: true
  },
  cabane: {
    id: 'cabane',
    content: "La cabane est une école de magie où tu apprends à devenir un sage protecteur de la forêt. Chaque leçon te connecte davantage aux secrets de la nature.",
    choices: [],
    isEnding: true
  },
  nid: {
    id: 'nid',
    content: "L'aigle géant te choisit comme son ami et ensemble, vous explorez le monde vu du ciel. Chaque vol te rapproche des étoiles et des histoires qu'elles racontent.",
    choices: [],
    isEnding: true
  },
  portail: {
    id: 'portail',
    content: "Le portail te transporte dans un monde parallèle où tu deviens le héros d'une grande aventure. Ce monde semble avoir attendu ta venue pour renaître.",
    choices: [],
    isEnding: true
  }
  // ------
  // start: {
  //   id: 'start',
  //   content: "En tant que petit chat curieux, tu te réveilles dans un jardin magique. Devant toi se trouvent trois chemins mystérieux : un buisson qui bruisse doucement, un arbre aux branches basses, et un petit tunnel creusé sous une haie. Un papillon doré semble t'inviter à le suivre.",
  //   choices: [
  //     {
  //       text: "Explorer le buisson bruissant",
  //       nextNodeId: 'buisson'
  //     },
  //     {
  //       text: "Grimper dans l'arbre",
  //       nextNodeId: 'arbre'
  //     },
  //     {
  //       text: "Suivre le tunnel sous la haie",
  //       nextNodeId: 'tunnel'
  //     }
  //   ],
  //   isEnding: false
  // },
  // buisson: {
  //   id: 'buisson',
  //   content: "Dans le buisson, tu découvres une famille de souris magiques qui dansent, une balle de laine enchantée qui brille, et un petit nid douillet. Les souris t'invitent à te joindre à leur fête.",
  //   choices: [
  //     {
  //       text: "Danser avec les souris",
  //       nextNodeId: 'danse'
  //     },
  //     {
  //       text: "Jouer avec la balle de laine",
  //       nextNodeId: 'balle'
  //     },
  //     {
  //       text: "Se reposer dans le nid",
  //       nextNodeId: 'nid'
  //     }
  //   ],
  //   isEnding: false
  // },
  // danse: {
  //   id: 'danse',
  //   content: "Les souris t'apprennent une danse magique qui te donne le pouvoir de parler avec tous les animaux du jardin !",
  //   choices: [],
  //   isEnding: true
  // },
  // balle: {
  //   id: 'balle',
  //   content: "La balle de laine enchantée te transforme en un chat arc-en-ciel qui peut voler dans les airs !",
  //   choices: [],
  //   isEnding: true
  // },
  // nid: {
  //   id: 'nid',
  //   content: "Le nid douillet est en réalité un portail vers un royaume félin où tu deviens le roi des chats !",
  //   choices: [],
  //   isEnding: true
  // },
  // arbre: {
  //   id: 'arbre',
  //   content: "Dans l'arbre, tu découvres un nid d'oiseaux chanteurs, une cabane secrète, et une branche qui brille mystérieusement.",
  //   choices: [
  //     {
  //       text: "Visiter le nid d'oiseaux",
  //       nextNodeId: 'oiseaux'
  //     },
  //     {
  //       text: "Explorer la cabane",
  //       nextNodeId: 'cabane_chat'
  //     },
  //     {
  //       text: "Toucher la branche brillante",
  //       nextNodeId: 'branche'
  //     }
  //   ],
  //   isEnding: false
  // },
  // oiseaux: {
  //   id: 'oiseaux',
  //   content: "Les oiseaux te confient leurs ailes magiques et tu deviens un chat-oiseau légendaire !",
  //   choices: [],
  //   isEnding: true
  // },
  // cabane_chat: {
  //   id: 'cabane_chat',
  //   content: "La cabane est une école de magie pour chats où tu apprends à devenir un puissant sorcier félin !",
  //   choices: [],
  //   isEnding: true
  // },
  // branche: {
  //   id: 'branche',
  //   content: "La branche te transforme en un chat de cristal qui peut créer des arcs-en-ciel !",
  //   choices: [],
  //   isEnding: true
  // },
  // tunnel: {
  //   id: 'tunnel',
  //   content: "Le tunnel te mène à un monde souterrain où tu trouves une cité de chats ninja, un lac de lait magique, et une grotte aux cristaux chatoyants.",
  //   choices: [
  //     {
  //       text: "Rejoindre les chats ninja",
  //       nextNodeId: 'ninja'
  //     },
  //     {
  //       text: "Boire le lait magique",
  //       nextNodeId: 'lait'
  //     },
  //     {
  //       text: "Explorer la grotte",
  //       nextNodeId: 'grotte'
  //     }
  //   ],
  //   isEnding: false
  // },
  // ninja: {
  //   id: 'ninja',
  //   content: "Tu deviens le plus grand maître ninja félin de tous les temps !",
  //   choices: [],
  //   isEnding: true
  // },
  // lait: {
  //   id: 'lait',
  //   content: "Le lait magique te donne le pouvoir de créer des bulles de rêves que tous les chats peuvent visiter !",
  //   choices: [],
  //   isEnding: true
  // },
  // grotte: {
  //   id: 'grotte',
  //   content: "Dans la grotte, tu découvres que tu es le gardien légendaire des cristaux de sagesse féline !",
  //   choices: [],
  //   isEnding: true
  // }
};

export const dogStoryNodes: Record<string, StoryNode> = {
  start: {
    id: 'start',
    content: "Tu es un joyeux petit chien qui découvre un parc enchanté. Devant toi s'étendent trois chemins : un sentier parfumé aux odeurs alléchantes, une aire de jeu remplie de balles colorées, et un petit pont traversant un ruisseau cristallin.",
    choices: [
      {
        text: "Suivre les odeurs alléchantes",
        nextNodeId: 'odeurs'
      },
      {
        text: "Courir vers l'aire de jeu",
        nextNodeId: 'jeux'
      },
      {
        text: "Explorer le pont et le ruisseau",
        nextNodeId: 'pont'
      }
    ],
    isEnding: false
  },
  odeurs: {
    id: 'odeurs',
    content: "Les odeurs te mènent à un pique-nique magique où des saucisses volantes dansent dans l'air, un os en or brille sous un arbre, et un gentil dragon cuisine des biscuits pour chiens.",
    choices: [
      {
        text: "Attraper les saucisses volantes",
        nextNodeId: 'saucisses'
      },
      {
        text: "Déterrer l'os en or",
        nextNodeId: 'os'
      },
      {
        text: "Aider le dragon à cuisiner",
        nextNodeId: 'cuisine'
      }
    ],
    isEnding: false
  },
  saucisses: {
    id: 'saucisses',
    content: "Les saucisses magiques te donnent le pouvoir de voler dans les airs comme un super-chien !",
    choices: [],
    isEnding: true
  },
  os: {
    id: 'os',
    content: "L'os en or fait de toi le roi des chiens, capable de parler avec tous les animaux du monde !",
    choices: [],
    isEnding: true
  },
  cuisine: {
    id: 'cuisine',
    content: "Le dragon t'apprend ses secrets culinaires et tu deviens le plus célèbre chef canin de l'univers !",
    choices: [],
    isEnding: true
  },
  jeux: {
    id: 'jeux',
    content: "Dans l'aire de jeu, tu trouves un toboggan arc-en-ciel, un trampoline qui mène aux nuages, et une balle qui brille de mille feux.",
    choices: [
      {
        text: "Glisser sur le toboggan",
        nextNodeId: 'toboggan'
      },
      {
        text: "Sauter sur le trampoline",
        nextNodeId: 'trampoline'
      },
      {
        text: "Jouer avec la balle brillante",
        nextNodeId: 'balle_chien'
      }
    ],
    isEnding: false
  },
  toboggan: {
    id: 'toboggan',
    content: "Le toboggan te transforme en un chien arc-en-ciel qui peut créer des toboggans magiques partout !",
    choices: [],
    isEnding: true
  },
  trampoline: {
    id: 'trampoline',
    content: "Tu rebondis si haut que tu deviens un chien-étoile qui peut voyager dans l'espace !",
    choices: [],
    isEnding: true
  },
  balle_chien: {
    id: 'balle_chien',
    content: "La balle magique te donne le pouvoir de créer des bulles de jeu où tous les chiens peuvent s'amuser !",
    choices: [],
    isEnding: true
  },
  pont: {
    id: 'pont',
    content: "Sur le pont, tu rencontres une sirène qui joue de la musique, un poisson volant qui fait des tours de magie, et une porte mystérieuse sous l'eau.",
    choices: [
      {
        text: "Danser avec la sirène",
        nextNodeId: 'sirene'
      },
      {
        text: "Suivre le poisson magicien",
        nextNodeId: 'poisson_magicien'
      },
      {
        text: "Plonger vers la porte",
        nextNodeId: 'porte_eau'
      }
    ],
    isEnding: false
  },
  sirene: {
    id: 'sirene',
    content: "La sirène t'apprend une chanson magique qui te permet de nager comme un dauphin !",
    choices: [],
    isEnding: true
  },
  poisson_magicien: {
    id: 'poisson_magicien',
    content: "Le poisson t'enseigne ses tours et tu deviens le plus grand chien magicien du monde aquatique !",
    choices: [],
    isEnding: true
  },
  porte_eau: {
    id: 'porte_eau',
    content: "La porte sous-marine mène à une cité engloutie où tu es couronné gardien des trésors marins !",
    choices: [],
    isEnding: true
  }
};