const Boxe = (
    props: {
        on: boolean;
        id: number;
        toggle: (id:number) => void;
    }
) => {
    const on: boolean = props.on;
    const style: object = {
        backgroundColor: on ? "blue" : "red",
    };

    return (
        <button
            className="box"
            style={style}
            onClick={()=>props.toggle(props.id)}
        >
        </button>
    );
}

export default Boxe;