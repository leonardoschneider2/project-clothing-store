import app from './app';
import * as db from './database/models';

const port = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  const server = app.listen(port, () => console.log(`app ouvindo na porta ${port}`));
  
  process.on('SIGINT', () => {
    server.close();
    console.log('App finalizado');
  });
});
