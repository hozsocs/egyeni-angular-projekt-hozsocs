import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

//Milyen ismérvei, tulajdonságai legyeneke a táblázat oszlopoknak?
export interface ITableColumn {
  title: string;
  key: string;
}

export class FormField {
  label: string = '';
  key: string = '';
  type?: string = 'text';
  options?: [
    {
      value: number;
      text: string;
    }
  ];
  required?: boolean = true;
  validators?: ValidatorFn[] = [];
  validateMessage?: string = ' ';
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  //Keresési értéket tároló változó
  searchPhrase$: BehaviorSubject<string> = new BehaviorSubject('');

  //Itt kell megadni milyen oszlopokból állnak és milyen mezőkhöz csatlakoznak az egyes táblázatok!!

  galleryTableColumns: ITableColumn[] = [
    { title: 'ID', key: 'id' },
    { title: 'Name', key: 'filename' },
    { title: 'Path', key: 'path' },
    { title: 'Period', key: 'period' },
    { title: 'Title', key: 'title' },
    { title: 'Date', key: 'date' },
    { title: 'Description', key: 'description' },
    { title: 'Featured', key: 'featured' },
    { title: 'Message', key: 'validateMessage' },
  ];

  userTableColumns: ITableColumn[] = [
    { key: 'id', title: 'Id' },
    { key: 'Firstname', title: 'firstname' },
    { key: 'Lastname', title: 'lastname' },
    { key: 'Right', title: 'right' },
    { key: 'Loginname', title: 'loginname' },
    { key: 'Password', title: 'password' },
    { key: 'active', title: 'Active' },
    { title: 'Message', key: 'validateMessage' },
  ];

  galleryEditorFormFields: FormField[] = [
    {
      label: 'Name',
      key: 'filename',
      validateMessage:
        'Min 4, max 50 karakter: számok, betűk, csak webp formátum pl. xxxx.webp',
      validators: [
        Validators.pattern(/^[A-Űa-ű0-9.]{4,50}\.webp$/),
        Validators.required,
      ],
    },
    {
      label: 'Path',
      key: 'path',

      validators: [
        Validators.required,
        Validators.pattern(/^(..\/assets\/gallery1\/)([A-Űa-ű0-9-]+[\/])+$/),
      ],
      validateMessage:
        'Kezdő karakterek:../assets/gallery1/, szabványos elérési út a végén kötelező "/" jel.',
    },
    {
      label: 'Period',
      key: 'period',
      validators: [
        Validators.pattern(/^[1-9][0-9][0-9][0-9]_[1-9][0-9][0-9][0-9]$/),
        Validators.required,
      ],
      validateMessage: 'Megadási formátum: YYYY_YYYY',
    },
    {
      label: 'Title',
      key: 'title',
      validators: [
        Validators.pattern(/^[A-Ü0-9][A-Üa-ü0-9-_ ]{4,100}$/),
        Validators.required,
      ],
      validateMessage: 'Min 4, max 100 karakter: számok, betűk, "_", "-".',
    },
    {
      label: 'Date',
      key: 'date',
      validators: [
        Validators.pattern(/^[2][0-9]{3}.[0-9][1-9].[0-9][1-9]$/),
        Validators.required,
      ],
      validateMessage: 'Szabványos magyar dátumformátum: yyyy.mm.dd',
    },
    {
      label: 'Description',
      key: 'description',
    },
    {
      label: 'Featured',
      key: 'featured',
      validators: [Validators.pattern(/^true|false$/), Validators.required],
      validateMessage: 'Lehetséges értékek: "true", "false"',
    },
  ];

  constructor() {}
}
