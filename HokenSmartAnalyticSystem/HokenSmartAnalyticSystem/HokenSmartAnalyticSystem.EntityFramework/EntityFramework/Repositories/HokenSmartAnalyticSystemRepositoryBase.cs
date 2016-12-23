using Abp.Domain.Entities;
using Abp.EntityFramework;
using Abp.EntityFramework.Repositories;

namespace HokenSmartAnalyticSystem.EntityFramework.Repositories
{
    public abstract class HokenSmartAnalyticSystemRepositoryBase<TEntity, TPrimaryKey> : EfRepositoryBase<HokenSmartAnalyticSystemDbContext, TEntity, TPrimaryKey>
        where TEntity : class, IEntity<TPrimaryKey>
    {
        protected HokenSmartAnalyticSystemRepositoryBase(IDbContextProvider<HokenSmartAnalyticSystemDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //add common methods for all repositories
    }

    public abstract class HokenSmartAnalyticSystemRepositoryBase<TEntity> : HokenSmartAnalyticSystemRepositoryBase<TEntity, int>
        where TEntity : class, IEntity<int>
    {
        protected HokenSmartAnalyticSystemRepositoryBase(IDbContextProvider<HokenSmartAnalyticSystemDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        //do not add any method here, add to the class above (since this inherits it)
    }
}
