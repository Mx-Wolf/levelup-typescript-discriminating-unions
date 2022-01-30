import { expect } from 'chai';
import { api } from './api';

describe('Пример использования системы типов',()=>{
  it('Производит дискриминацию по типу результата',async ()=>{
    const result = await api({});
    if(result.type==='success'){
      expect(typeof result.form === 'object').to.eq(true);
    }
    if(result.type === 'error'){
      expect(typeof result.status === 'string').eq(true);
    }
  });
});
