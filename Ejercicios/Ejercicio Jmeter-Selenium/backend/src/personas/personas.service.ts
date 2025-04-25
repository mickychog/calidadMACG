import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './persona.entity';

@Injectable()
export class PersonasService {
    constructor(
        @InjectRepository(Persona)
        private personasRepository: Repository<Persona>,
    ) { }

    async create(personaData: Partial<Persona>): Promise<Persona> {
        const persona = this.personasRepository.create(personaData);
        return this.personasRepository.save(persona);
    }

    async findAll(): Promise<Persona[]> {
        return this.personasRepository.find();
    }

    async findOneByCarnet(carnet: string): Promise<Persona | null> {
        return this.personasRepository.findOne({ where: { carnet } });
    }
}