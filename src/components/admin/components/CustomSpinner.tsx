import Spinner from './Spinner';

export default function CustomSpinner() {

    return (
        <div style={{
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 100000,
            backgroundColor: "rgb(51 51 51 / 87%)"
        }}>
            <div style={{ position: "absolute", left: "50%", top: "50%", transition: "translate(-50%, -50%)" }}>
                <Spinner size="sm" color="primary" />
            </div>
        </div>
    )
}
