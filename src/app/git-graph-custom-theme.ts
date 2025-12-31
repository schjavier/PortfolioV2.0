import {templateExtend, TemplateName} from '@gitgraph/js'

export const GitGraphCustomTheme = templateExtend(TemplateName.Metro, {

  colors: ["#fa448c", "#fec859", "#43b5a0"],

    branch: {
      lineWidth: 4,
      spacing: 100,
      label:{
        display:true,
        font: "bold 12pt 'JetBrains Mono', 'monospace' ",
        bgColor: "#170b19"
      }
    },

    commit: {
      spacing: 150,
      dot:{
        size: 20,
        strokeWidth: 4,
        strokeColor: "#170b19"
      },
      message:{
        display: false,
        displayAuthor: false,
        displayHash: false,
        font: "normal 14pt 'Arial', serif",
        color: "#ffffff",
      }

    }
  }
)


