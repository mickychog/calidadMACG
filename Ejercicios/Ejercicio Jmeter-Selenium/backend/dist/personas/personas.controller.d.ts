import { PersonasService } from './personas.service';
import { Persona } from './persona.entity';
export declare class PersonasController {
    private readonly personasService;
    constructor(personasService: PersonasService);
    create(personaData: Partial<Persona>): Promise<Persona>;
    findAll(): Promise<Persona[]>;
}
