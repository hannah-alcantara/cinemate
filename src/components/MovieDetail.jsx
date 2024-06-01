import Movies from "../movies.json";
export function MovieDetail() {
  return (
    <section className='bg-indigo-900 h-[34rem]'>
      <div>
        <div className='absolute w-full h-96 bg-gradient-to-t from-indigo-900'></div>
        <img
          src='https://image.tmdb.org/t/p/original/nxsqOOMFfz7mWW8JLmpcLjNz7E2.jpg'
          alt='Backdrop'
        />
        {/* fix positioning */}
        <div className='absolute top-60 p-8 h-64'>
          {/* -top-20 */}
          <div className='flex items-center'>
            <img
              className='rounded shadow-lg w-28'
              src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg'
              alt='Poster'
            />
            <div className='pl-4'>
              <h1 className='text-2xl font-bold font-oswald uppercase text-white'>
                La La Land
                <span className='text-xs font-courier text-gray-200'>
                  &nbsp;2016
                </span>
              </h1>
              <div className='grid grid-flow-col gap-2 my-3 text-white'>
                <button className='font-courier uppercase text-[10px] bg-black p-1 rounded'>
                  Music
                </button>
                <button className='font-courier uppercase text-[10px] bg-black p-1 rounded'>
                  Drama
                </button>
                <button className='font-courier uppercase text-[10px] bg-black p-1 rounded'>
                  Romance
                </button>
                <button className='font-courier uppercase text-[10px] bg-black p-1 rounded'>
                  Comedy
                </button>
              </div>
              <p className='text-xs text-gray-300 my-4 line-clamp-3'>
                Mia, an aspiring actress, serves lattes to movie stars in
                between auditions and Sebastian, a jazz musician, scrapes by
                playing cocktail party gigs in dingy bars, but as success mounts
                they are faced with decisions that begin to fray the fragile
                fabric of their love affair, and the dreams they worked so hard
                to maintain in each other threaten to rip them apart.
              </p>
              <div>
                <div className='flex text-white'>
                  <i className='fas fa-eye text-[10px] bg-black p-2 rounded-2xl' />
                  <i className='fas fa-heart mx-2 text-[10px] bg-black p-2 rounded-2xl' />
                  <i className='fas fa-bookmark text-[10px] bg-black p-2 rounded-2xl' />
                </div>
              </div>
            </div>
          </div>
          <hr className='my-5' />
          <div className='text-white'>
            <table className='table-auto w-64'>
              <tr className='text-xs'>
                <td>Directed by:</td>
                <td className='font-courier'>Damien Chazelle</td>
              </tr>
              <tr className='text-xs'>
                <td>Written by:</td>
                <td className='font-courier '>Damien Chazelle</td>
              </tr>
              <tr className='text-xs'>
                <td>Cast:</td>
                <td className='font-courier '>Ryan Gosling, Emma Stone</td>
              </tr>
            </table>
          </div>
          <hr className='my-5' />
        </div>
      </div>
    </section>
  );
}
