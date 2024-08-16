export function FakeRouter() {
    const pathname = window.location.pathname;

    switch (pathname) {
        case "/":
            return <div key="1">Mate</div>;
        case "/welcome":
            return <div key="2" id="welcome-mount-div"></div>;
        default:
            return <div key="3">Fake router couldnt find anything 404</div>;
    }
}
