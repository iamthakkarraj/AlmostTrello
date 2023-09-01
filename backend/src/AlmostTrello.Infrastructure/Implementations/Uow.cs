using AlmostTrello.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using System.Data.SqlClient;
using AlmostTrello.DataEntities.DBContext;

namespace AlmostTrello.Infrastructure.Implementations
{
    public class Uow : IUow
    {
        private Dictionary<string, dynamic> _repositories;
        private DbContext DbContext;
        private IDbContextTransaction _dbContextTransaction;

        public Uow()
        {
            CreateDBContext();
        }

        public void BeginTransaction()
        {
            _dbContextTransaction = DbContext.Database.BeginTransaction();
        }

        public void Rollback()
        {
            _dbContextTransaction?.Rollback();
        }

        public bool Commit()
        {
            try
            {
                _dbContextTransaction?.Commit();
                return true;
            }
            catch (SqlException)
            {
                return false;
            }
        }

        public void SaveChanges()
        {
            DbContext.SaveChanges();
        }

        public IRepository<TEntity> Repository<TEntity>() where TEntity : class
        {
            if (_repositories == null)
                _repositories = new Dictionary<string, dynamic>();
            var type = typeof(TEntity).Name;
            if (_repositories.ContainsKey(type))
                return (IRepository<TEntity>)_repositories[type];
            _repositories.Add(type, new Repository<TEntity>(DbContext));
            return _repositories[type];
        }

        protected void CreateDBContext()
        {
            DbContext = new AlmostTrelloDBContext();
        }
    }
}
