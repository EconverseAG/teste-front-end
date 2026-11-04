import './ViewAllButton.scss';

type ViewAllButtonProps = {
  onClick: () => void;
};

function ViewAllButton({ onClick }: Readonly<ViewAllButtonProps>) {
  return (
    <button className="view-all-button" type="button" onClick={onClick}>
      Ver todos
    </button>
  );
}

export default ViewAllButton;
