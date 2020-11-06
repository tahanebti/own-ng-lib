import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'tn-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFilterComponent implements OnInit, OnDestroy {

  constructor() { }
 

  ngOnInit(): void {
    console.clear();



    const list = document.querySelector('.c-list');
    console.log(list)
    const storageName = 'designChecklist';
    
    const updateStorage = () => {
      localStorage.setItem(storageName, list.innerHTML);
    };
    
    const clearStorage = () => {
      localStorage.removeItem(storageName);
    };
    
    const checkboxFunctions = () => {
      const checkboxes = document.querySelectorAll('.c-checkbox');
    
      const checkboxActive = el => {
        el.classList.add('c-checkbox--active');
        el.querySelector('.c-checkbox__icon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>';
    
        if (el.parentNode.querySelector('ul')) {
          if (el.parentNode.querySelector('ul').querySelectorAll('.c-checkbox').length > 0) {
            el.parentNode.querySelector('ul').querySelectorAll('.c-checkbox').forEach(item => {
              item.classList.add('c-checkbox--active');
              item.querySelector('.c-checkbox__icon').innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>';
            });
          }
        }
    
        let parentListElement = el.parentNode.parentNode.previousElementSibling;
        let siblingElements = el.parentNode.parentNode.querySelectorAll('.c-checkbox');
        if (parentListElement.classList.contains('c-checkbox')) {
          if (siblingElements.length == el.parentNode.parentNode.querySelectorAll('.c-checkbox--active').length) {
            parentListElement.classList.add('c-checkbox--active');
            parentListElement.querySelector('.c-checkbox__icon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>';
          } else {
            checkboxPseudo(parentListElement);
          }
        }
      };
    
      const checkboxPseudo = el => {
        if (el.classList.contains('c-checkbox--active')) {
          el.classList.remove('c-checkbox--active');
        }
        el.querySelector('.c-checkbox__icon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line></svg>';
      };
    
      const checkboxInactive = el => {
        el.classList.remove('c-checkbox--active');
        el.querySelector('.c-checkbox__icon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>';
        if (el.parentNode.querySelectorAll('.c-checkbox').length > 1) {
          el.parentNode.querySelectorAll('.c-checkbox').forEach(item => {
            if (item.classList.contains('c-checkbox--active')) {
              item.classList.remove('c-checkbox--active');
              item.querySelector('.c-checkbox__icon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>';
            }
          });
        }
    
        let parentListElement = el.parentNode.parentNode.previousElementSibling;
        let siblingElements = el.parentNode.parentNode.querySelectorAll('.c-checkbox');
        if (parentListElement.classList.contains('c-checkbox')) {
          if (siblingElements.length > el.parentNode.parentNode.querySelectorAll('.c-checkbox--active').length) {
            checkboxPseudo(parentListElement);
          }
        }
    
      };
    
      checkboxes.forEach(checkbox => {
        checkbox.querySelector('.c-checkbox__input').addEventListener('input', () => {
          let state = checkbox.classList.contains('c-checkbox--active');
          state ? checkboxInactive(checkbox) : checkboxActive(checkbox);
     
        });
      });
    };
    
    const checkStorage = () => {
      let storageState = localStorage.getItem(storageName);
      storageState ? list.innerHTML = localStorage.getItem(storageName) : checkboxFunctions();
    };
    
    checkStorage();
  }

  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }

}
