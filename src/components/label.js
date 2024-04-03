import capitalize from "@/utils/capitalize";

const InputLabel = ({ label = 'Input Field Label' }) => {
    return (
        <label className="label">
            <span className="label-text">{capitalize(label)}</span>
        </label>
    );
};

export default InputLabel;