<div className="screen-scroll-container flex flex-col font-[PlexMono]">
  <div className="screen-scroll-element flex flex-col gap-4">
    <section className="h-24 border rounded-md flex p-2 gap-3 items-center">
      <div className="h-20 w-20 bg-amber-400 rounded-sm"></div>
      <div className="grow h-full ">
        <section className="h-1/2 w-fit text-[20px]">Nameless Hero</section>
        <section className="h-1/2 flex text-nowrap gap-3">
          <ResourceCounter
            icon={Health}
            className="border rounded-sm h-full text-lg/loose w-fit flex gap-2 px-3 font-[PlexMono] text-red-600"
            value={2800}
          />
          <ResourceCounter
            icon={Mana}
            className="border rounded-sm h-full text-lg/loose w-fit flex gap-2 px-3 font-[PlexMono] text-teal-600"
            value={100}
          />
          <Parameter />
        </section>
      </div>
    </section>
    <div className="grow rounded-md gap-4 flex">
      <section className="w-1/4 p-4 border flex flex-col gap-8 rounded-md">
        <CombinedStatCounter
          leftStat={shit.leftStat}
          rightStat={shit.rightStat}
        />{" "}
        <CombinedStatCounter
          leftStat={shit.leftStat}
          rightStat={shit.rightStat}
        />{" "}
        <CombinedStatCounter
          leftStat={shit.leftStat}
          rightStat={shit.rightStat}
        />
      </section>
      <section className="w-1/4 border rounded-md"></section>
      <section className="grow border rounded-md"></section>
    </div>
  </div>
</div>;
