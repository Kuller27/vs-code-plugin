const vscode = require('vscode');

function activate(context) {
  console.log('Плагин "Motivate Me" активирован.');

  let disposable =
      vscode.commands.registerCommand('motivate-me.showMotivation', function() {
        const quotes = [
          'Keep coding — you’re getting better every day!',
          'Every bug is a step toward mastery.',
          'Success is the sum of small efforts repeated daily.',
          'You write code — therefore you create.',
          'Don’t stop until you’re proud!'
        ];

        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        vscode.window.showInformationMessage(randomQuote);
      });

  context.subscriptions.push(disposable);
}

function deactivate() {
  console.log('Плагин "Motivate Me" деактивирован.');
}

module.exports = {
  activate,
  deactivate
};
