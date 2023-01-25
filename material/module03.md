# Módulo 03 - HTML e CSS

Chegou o momento de aprender as tecnologias fundamentais do desenvolvimento WEB. 

O que é Hypertext Markup Language (HTML) e Cascading Stylesheet (CSS) e por que essas duas linguagens fazem parte da base da WEB. 

Neste módulo nós iremos entender conceitos de maneira prática e sairemos deste módulo com mais de 90% do projeto concluído. 

Assim que acabar esse módulo, você terá aplicado conhecimentos técnicos dos fundamentos de HTML e CSS que são mais demandados no dia a dia do mercado de trabalho. 

Você vai gostar do que vai construir nessa etapa do curso!

---

[HTML](https://www.notion.so/HTML-afb10213381d44009a828036f7249055)

[CSS](https://www.notion.so/CSS-079f03e8a57b4ee5b9fdf0aa0c81fd70)

---

## Configurando o VSCode

Lembre de instalar o VSCode seguindo [esse documento](https://www.notion.so/Preparando-o-Ambiente-5d272696c12841138acc83d7d7f6b811)

<aside>
💡 **Olha que legal…**

Você pode baixar a pasta `projeto` que criamos em aula, e que contém os dois arquivos na pasta `.vscode`

É só clicar aqui para baixar em zip e descompactar no seu computador

[projeto.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f8e92f69-bcb7-4068-a0d2-17e9f48ae2e6/projeto.zip)

</aside>

### Ou,

Abaixo segue os códigos para você copiar e colar nos arquivos, conforme visto em aula

extension.json

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "PKief.material-icon-theme",
    "rocketseat.theme-omni",
    "ritwickdey.LiveServer"
  ]
}
```

settings.json

```json
 {
  // editor
  "editor.wordWrap": "on",
  "editor.fontSize": 18,
  "editor.lineHeight": 30,
  "editor.tabSize": 2,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.minimap.enabled": false,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "files.autoSave": "afterDelay",

  // explorer
  "explorer.compactFolders": false,

  // workbench
  "workbench.editor.enablePreview": false,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Omni",

  // prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.enable": true,
  "prettier.singleQuote": false,
  "prettier.tabWidth": 2,
  "prettier.semi": false,

  // terminal
  "terminal.integrated.fontSize": 16,
  "terminal.integrated.profiles.windows": {
    "Git Bash": {
      "source": "Git Bash"
    }
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash"
}
```
