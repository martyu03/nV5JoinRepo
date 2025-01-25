const CategoryTitle: React.FC<any> = ({ title, type, viewAll }) => {
  return (
    <div className="w-full flex gap-[2px]">
      <div
        className={`
          h-[30px] grid place-items-center text-white text-sm uppercase px-[15px]
          ${type === 'one' ? 'bg-red-500' : 'bg-[#333]'}
        `}
      >
        {title}
      </div>

      <div
        className={`
          flex-1 h-[30px] grid place-items-center text-sm flex ml-auto text-white px-[15px]
          ${type === 'one' ? 'bg-[#333]' : 'bg-[#808080]'}
        `}
      >
        {
          viewAll && 'VIEW ALL'
        }
      </div>
    </div>
  )
}



export default CategoryTitle