import { UpdateWrapper } from './UpdateModal.styled';

export const UpdateModal = ({ selfDestruction, updatingTransaction }) => {
  console.log(updatingTransaction);
  return (
    <UpdateWrapper onClick={selfDestruction}>
      <form>
        <h2>Edit Transaction</h2>
        <input type="checkbox" />
        <input type="number" />
        <input type="textarea" />
        <button type="submit">Save</button>
        <button onClick={selfDestruction} type="button">
          Cancel
        </button>
      </form>
    </UpdateWrapper>
  );
};
