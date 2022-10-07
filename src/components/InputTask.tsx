import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
interface Props {
  addTodo: (taskName: string) => void;
}

const InputTask = ({ addTodo }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (inputValue !== '') {
      addTodo(inputValue);
      setInputValue('');
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  return (
    <form className="w-full flex gap-2" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className={`w-full p-2 bg-gray-200 rounded focus:bg-white ${hasError && 'border-2 border-red-500'}`}
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
      <button type="submit" className="p-2 rounded bg-yellow-500 text-white font-medium hover:bg-yellow-600">
        Adicionar
      </button>
    </form>
  );
};

export default InputTask;
