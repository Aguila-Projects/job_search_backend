enum UserRole {
  Admin = 'admin',
  User = 'user',
}

enum JobSourceEnum {
  GREENHOUSE = 'greenhouse',
  WORKDAY = 'workday',
}

enum ApplicationStatus {
  ACTIVE = 'active',
  INTERVIEW = 'interview',
  OFFER = 'offer',
  REJECTED = 'rejected',
  WITHDRAWN = 'withdrawn',
}

export { UserRole, JobSourceEnum, ApplicationStatus };
