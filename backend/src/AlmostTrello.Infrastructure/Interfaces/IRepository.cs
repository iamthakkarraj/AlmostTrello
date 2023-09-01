using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace AlmostTrello.Infrastructure.Interfaces
{
    public interface IRepository<TEntity> where TEntity : class
    {
        DbSet<TEntity> GetDbSet { get; }

        Task<List<TEntity>> GetAll();

        Task<TEntity> GetById(Guid id);

        Task Create(TEntity entity);

        Task<TEntity> Update(TEntity entity);

        Task<TEntity> Delete(Guid id);

        Task<TEntity> FindAsync(Expression<Func<TEntity, bool>> match);

        Task<List<TEntity>> FindAllAsync(Expression<Func<TEntity, bool>> match);
    }
}
