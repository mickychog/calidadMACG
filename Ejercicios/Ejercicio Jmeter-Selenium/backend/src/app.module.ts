import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './personas/persona.entity';
import { PersonasModule } from './personas/personas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'personas_db',
      entities: [Persona],
      synchronize: true,

      extra: {
        connectionLimit: 10,
      },
    }),
    PersonasModule,
  ],
})
export class AppModule { }