const Events = () => {
    const funcaoClicar = () => {
        console.log("Ativou a função clicar");
    }
    const rederizaAlgumaCoisa = (x) => {
        if (x) {
            return <h1>Rederizando isso!</h1>
        } else {
            return <h1>Rederizando aquilo</h1>
        }
    }
    return (
        <div>
            <div>
                <button onClick={() => console.log("Testando um evento")}>
                    Clique Aqui
                </button>
            </div>
        {/*Evento com Função*/}
        <div>
            <button onClick={funcaoClicar}>
                Clique Aqui com função
            </button>
        </div>
        {/*rederização*/}
        {rederizaAlgumaCoisa(true)}
        {rederizaAlgumaCoisa(false)}
        </div>
    );
};

export default Events;