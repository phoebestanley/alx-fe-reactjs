import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(id);
      navigate('/');
    }
  };

  return <button onClick={handleDelete} style={{ color: 'white', backgroundColor: 'red', border: 'none', padding: '6px 10px' }}>Delete</button>;
};

export default DeleteRecipeButton;
