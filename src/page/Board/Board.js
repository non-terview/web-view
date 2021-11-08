import BoardInfo from '../../components/BoardInfo/BoardInfo';
import BoardList from '../../components/BoardList/BoardList';
import BoardSearch from '../../components/BoardSearch/BoardSearch';

export default function BoardPage() {
  return (
    <div>
      <BoardSearch />
      <BoardList />
      <BoardInfo />
    </div>
  );
}
