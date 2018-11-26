import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/contact';


@Pipe({ name: 'search' })

export class SearchContactPipe implements PipeTransform {
    transform(items: Contact[], searchText: string) {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.trim().toLowerCase();
        return items.filter(function (item) {
            if (item.firstName) {
                if (
                    item.firstName.trim().toLowerCase().indexOf(searchText) != -1 || 
                    item.lastName.trim().toLowerCase().indexOf(searchText) != -1 || 
                    item.email.trim().toLowerCase().indexOf(searchText) != -1 || 
                    item.phone.toString().trim().toLowerCase().indexOf(searchText) != -1 ||
                    (`${item.firstName} ${item.lastName}`).trim().toLowerCase().indexOf(searchText) != -1
                    )
                    return true;
            }
        });
    }
}