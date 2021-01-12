using PetSupport.Core.Entities;
using PetSupport.Core.Interfaces;
using PetSupport.Infrastructure.Data.Data;

namespace PetSupport.Infrastructure.Data.Repository
{
    public class ServiceRepository : RepositoryBase<Service>, IServiceRepository
    {
        public ServiceRepository(DataContext context) : base(context)
        {
        }
    }
}