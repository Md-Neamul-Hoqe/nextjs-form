import capitalize from '@/utils/capitalize';

const InputField = ({ type = "text", name = "text", placeholder = "Type here...", register = {}, errors = {}, options = {} }) => {
    return (
        <>
            <input type={type} name={name} placeholder={placeholder} {...register(`${name}`, { ...options })} className='input input-bordered' />
            {errors?.[ `${name}` ] && <p className='text-error pt-2'>{capitalize(name)} is required.</p>}
        </>
    );
};

export default InputField;