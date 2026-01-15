export const gitGraphDefinition:string = `gitGraph
      commit id: "AboutMe"
    branch educacion
      commit id: "Bootcamps"
    checkout main
    branch proyectos
      commit id: "Brotes"
    checkout proyectos
      commit id: "EmailSender"
    checkout educacion
      commit id: "Tecnicatura"
    checkout main
    branch experiencia
      merge educacion
      merge proyectos
      commit id: "FullStack Developer"
    checkout main
      commit id: "Contacto"
      `
