import './styles/main.scss';

export function ping(): string {
    return 'pong';
}

function msg(): void {
    const app = document.getElementById('app');
    const h2 = document.createElement('h2');
    h2.textContent =
        'This place is not a place of honor…no highly esteemed deed is commemorated here… nothing valued is here.';
    app?.appendChild(h2);
}

msg();
