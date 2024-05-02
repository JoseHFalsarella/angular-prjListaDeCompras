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
  shoppingList: { name: string; quantity: number; done: boolean; }[] = [];

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

  addItem() {
    if (this.listForm.valid) {
      const itemName = this.listForm.get('writeItem')?.value;
      const itemQty = this.listForm.get('insertQty')?.value;

      this.apiService.createItem(itemName, itemQty).subscribe((result: any) => {
        console.log(result);
        this.shoppingList.push({ name: itemName, quantity: itemQty, done: false });
      })

      this.listForm.reset();
    } else {
      this.listForm.markAllAsTouched();
    }
  }

  removeItem(index: number) {
    this.apiService.deleteItem(index).subscribe((result: any) => {
      console.log(result);
      this.shoppingList.splice(index, 1);
    })
  }

  toggleDone(event: any, index: number) {
    const isChecked = event.target.checked;
    this.apiService.updateStatus(isChecked, index).subscribe((result: any) => {
      console.log(result);
      this.shoppingList[index].done = isChecked;
    })
  }
}
