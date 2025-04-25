import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  // Importa TypeOrmModule
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { Persona } from './persona.entity';  // Importa la entidad Persona

@Module({
  imports: [TypeOrmModule.forFeature([Persona])],  // Registra la entidad Persona
  providers: [PersonasService],
  controllers: [PersonasController],
})
export class PersonasModule { }
