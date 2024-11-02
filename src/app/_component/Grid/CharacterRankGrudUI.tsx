import { Container, Grid } from '@mui/material';
import GeneralRankTableUI from '../Table/Rank/GeneralRankTableUI';
import RebootRankTableUI from '../Table/Rank/RebootRankTableUI';

const CharacterRankGrudUI = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <GeneralRankTableUI />
        </Grid>

        <Grid item xs={12} md={6}>
          <RebootRankTableUI />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CharacterRankGrudUI;
