import { StoryNode } from './types';

export const storyNodes: Record<string, StoryNode> = {
  start: {
    id: 'start',
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
};
