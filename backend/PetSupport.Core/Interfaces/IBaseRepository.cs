using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace PetSupport.Core.Interfaces
{
    public interface IBaseRepository<T>
    {
        Task<T> GetByIdAsync(int id);
        Task<IEnumerable<T>> GetAllAsync();
        Task<IEnumerable<T>> FindByConditionAsync(Expression<Func<T, bool>> expression);

        void Add(T entity);
        void Update(T entity);
        Task<bool> SaveChangesAsync();
    }
}