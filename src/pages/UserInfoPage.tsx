const UserInfoPage = () => {
  return (
    <section className="min-h-screen p-8 bg-[#000000] text-[#FFFFFF] flex flex-col items-center gap-y-10 px-60 pt-10">
      <div>
        <h3 className="text-center text-2xl font-bold">회원정보 수정</h3>
      </div>
      <form id="userUpdateForm" className="flex grid gap-y-8 w-full"></form>
    </section>
  );
};
export default UserInfoPage;
