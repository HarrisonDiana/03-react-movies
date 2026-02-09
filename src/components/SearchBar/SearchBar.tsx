import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (formData: FormData): void => {
    const query = formData.get('query')?.toString().trim();

    if (!query) {
      toast.error('Please enter a search query');
      return;
    }

    onSubmit(query);
  };

  return (
    <form className={styles.form} action={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search movies..."
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
}
