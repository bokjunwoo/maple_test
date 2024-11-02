import { TableContainer, Table } from '@mui/material';
import RankBoxUI from './common/RankBoxUI';
import RankHeadUI from './common/RankSubTitleHeadUI';
import RankBodyUI from './common/RankTitleBodyUI';
import { a, b } from '@/app/data/FAQ';

const RebootRankTableUI = () => {
  return (
    <RankBoxUI title="리부트">
      <TableContainer>
        <Table aria-label="simple table" size="small">
          <RankHeadUI />

          {a.map((item, index) => (
            <RankBodyUI
              key={item.character_name}
              item={item}
              previousItem={b[index]}
            />
          ))}
        </Table>
      </TableContainer>
    </RankBoxUI>
  );
};

export default RebootRankTableUI;
