import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.scss']
})
export class ListaDeComprasComponent implements OnInit {
  listForm: FormGroup;
  shoppingList: any[] = [];

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService
  ) {
    this.listForm = this.formBuilder.group({
      writeItem: ['', Validators.required],
      insertQty: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.apiService.getAllItems().subscribe((shoppingList) => {
      this.shoppingList = shoppingList;
    })
  }

  createItem() {
    if (this.listForm.valid) {
      const nome = this.listForm.get('writeItem')?.value;
      const quantity = this.listForm.get('insertQty')?.value;

      this.apiService.createItem(nome, quantity).subscribe((result: any) => {
        console.log(result);
        this.shoppingList.push({ nome, quantity });
      })

      this.listForm.reset();
    } else {
      this.listForm.markAllAsTouched();
    }
  }

  removeItem(id: number) {
    this.apiService.deleteItem(id).subscribe((result: any) => {
      console.log(result);
      this.shoppingList.splice(id, 1);
    })
    window.location.reload();
  }

  updateItemStatus(id: number, status: boolean) {
      this.apiService.updateStatus(status, id).toPromise();
  }

  async toggleDone(event: Event, id: number){
    const index = this.shoppingList.findIndex(item => item.id === id);
    if (index !== -1) {
      this.shoppingList[index].status = (event.target as HTMLInputElement).checked;
      this.updateItemStatus(id, this.shoppingList[index].status);
    }
  }
}
