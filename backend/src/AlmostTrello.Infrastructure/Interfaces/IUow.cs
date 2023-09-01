using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlmostTrello.Infrastructure.Interfaces
{
    public interface IUow
    {
        void BeginTransaction();
        void SaveChanges();
        bool Commit();
        void Rollback();
        IRepository<TEntity> Repository<TEntity>() where TEntity : class;
    }
}
