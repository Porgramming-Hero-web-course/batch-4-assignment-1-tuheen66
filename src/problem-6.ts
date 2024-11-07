{
  //
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (profile: Profile, updates: Partial<Profile>) => {
    return { ...profile, ...updates };
  };

  //
}
