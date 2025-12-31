import {templateExtend, TemplateName} from '@gitgraph/js'

export const GitGraphCustomThemeMobile = templateExtend(TemplateName.Metro, {

  colors: ["#fa448c", "#fec859", "#43b5a0"],

    branch: {
      lineWidth: 2,
      spacing: 50,
      label:{
        display:true,
        font: "bold 8pt 'JetBrains Mono', 'monospace' ",
        bgColor: "#170b19"
      }
    },

    commit: {
      spacing: 60,
      dot:{
        size: 10,
        strokeWidth: 2,
        strokeColor: "#170b19"
      },
      message:{
        display: false,
        displayAuthor: false,
        displayHash: false
      }

    }
  }
)


