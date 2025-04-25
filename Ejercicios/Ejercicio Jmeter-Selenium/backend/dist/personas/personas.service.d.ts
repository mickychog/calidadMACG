import { Repository } from 'typeorm';
import { Persona } from './persona.entity';
export declare class PersonasService {
    private personasRepository;
    constructor(personasRepository: Repository<Persona>);
    create(personaData: Partial<Persona>): Promise<Persona>;
    findAll(): Promise<Persona[]>;
    findOneByCarnet(carnet: string): Promise<Persona | null>;
}
