export const gitGraphDefinitionEs: string = `gitGraph
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
      `;

export const gitGraphDefinitionEn: string = `gitGraph
      commit id: "AboutMe"
    branch education
      commit id: "Bootcamps"
    checkout main
    branch projects
      commit id: "Brotes"
    checkout projects
      commit id: "EmailSender"
    checkout education
      commit id: "Degree"
    checkout main
    branch experience
      merge education
      merge projects
      commit id: "FullStack Developer"
    checkout main
      commit id: "Contact"
      `;
