import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-generate-page',
  templateUrl: './generate-page.component.html',
  styleUrls: ['./generate-page.component.css']
})
export class GeneratePageComponent {
  entities: { name: string; attributes: { name: string; type: string }[] }[] = [
    { name: '', attributes: [{ name: '', type: 'string' }] }
  ];
  roles: string = '';

  constructor(private http: HttpClient) {}

  addEntity(): void {
    this.entities.push({ name: '', attributes: [{ name: '', type: 'string' }] });
  }

  removeEntity(index: number): void {
    this.entities.splice(index, 1);
  }

  addAttribute(entityIndex: number): void {
    this.entities[entityIndex].attributes.push({ name: '', type: 'string' });
  }

  removeAttribute(entityIndex: number, attrIndex: number): void {
    this.entities[entityIndex].attributes.splice(attrIndex, 1);
  }

  generateCrud(): void {
    const models = this.entities.map(entity => ({
      name: entity.name,
      attributes: entity.attributes
    }));

    const payload = {
      models: models,
      responseType: 'zip',
      roles: this.roles.split(',').map(role => role.trim())
    };

    this.http
      .post('https://localhost:7286/api/CodeGeneration/generate', payload, {
        responseType: 'blob'
      })
      .subscribe(
        (response: Blob) => {
          const url = window.URL.createObjectURL(response);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'crud.zip';
          link.click();
        },
        error => {
          console.error('Error generating CRUD:', error);
        }
      );
  }
}
