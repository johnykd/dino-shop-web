import { createProfile } from "@/action/actions";
import SubmitButtons from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import React from "react";

const ProfileCreatePage = () => {
  return (
    <div>
      <h1>Create Profile</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProfile}>
          <div className="grid md:grid-cols-2 gap-4">
            <FormInput
              name="firstName"
              label="First Name"
              type="text"
              placeHolder="First Name"
            />
            <FormInput
              name="lastName"
              label="Last Name"
              type="text"
              placeHolder="Last Name"
            />
            <FormInput
              name="userName"
              label="Username"
              type="text"
              placeHolder="Username"
            />
          </div>
          <SubmitButtons className={""} text={"Submit"} size={"sm"} />
        </FormContainer>
      </div>
    </div>
  );
};

export default ProfileCreatePage;
