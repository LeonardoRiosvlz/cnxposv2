export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** Represents NULL values */
  Void: any;
};

export enum Action_List {
  Create = 'CREATE',
  Update = 'UPDATE',
  DeleteOne = 'DELETE_ONE',
  DeleteMany = 'DELETE_MANY',
  GetAll = 'GET_ALL',
  GetPaginated = 'GET_PAGINATED',
  GetOne = 'GET_ONE',
  UsersGetUserProfile = 'USERS_GET_USER_PROFILE',
  FilesGetWriteSignedUrl = 'FILES_GET_WRITE_SIGNED_URL',
  FilesCreateUploadedFile = 'FILES_CREATE_UPLOADED_FILE',
  TenantGetConnection = 'TENANT_GET_CONNECTION',
  TranscoderTranscoder = 'TRANSCODER_TRANSCODER'
}

export enum App_Modules {
  Users = 'USERS',
  Headquarters = 'HEADQUARTERS',
  UserArea = 'USER_AREA',
  UserPosition = 'USER_POSITION',
  UserRoles = 'USER_ROLES',
  Tenant = 'TENANT',
  Files = 'FILES',
  Notifications = 'NOTIFICATIONS',
  Setting = 'SETTING',
  Membership = 'MEMBERSHIP',
  IrpRoadTaxes = 'IRP_ROAD_TAXES',
  IftaFuelTaxes = 'IFTA_FUEL_TAXES',
  DotInfo = 'DOT_INFO',
  SubstanceComplianceClearingHouse = 'SUBSTANCE_COMPLIANCE_CLEARING_HOUSE',
  DriverFiles = 'DRIVER_FILES',
  AnnualVehInspStateRermits = 'ANNUAL_VEH_INSP_STATE_RERMITS',
  TrailerRental = 'TRAILER_RENTAL',
  YardRental = 'YARD_RENTAL',
  FinancedEquipment = 'FINANCED_EQUIPMENT',
  Accounting = 'ACCOUNTING'
}

export type AccountingFilterFilter = {
  and?: Maybe<Array<AccountingFilterFilter>>;
  or?: Maybe<Array<AccountingFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type AccountingResponse = {
  id: Scalars['ID'];
  date: Scalars['DateTime'];
  paymentAmount: Scalars['Float'];
  achDate: Scalars['String'];
  file?: Maybe<CloudFileResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AnnualVehInspStateRermitsFilterFilter = {
  and?: Maybe<Array<AnnualVehInspStateRermitsFilterFilter>>;
  or?: Maybe<Array<AnnualVehInspStateRermitsFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type AnnualVehInspStateRermitsResponse = {
  id: Scalars['ID'];
  annualVehInspReport?: Maybe<Scalars['String']>;
  annualVehInspReportUnbound?: Maybe<Scalars['String']>;
  annualVehInspReportFile?: Maybe<CloudFileResponse>;
  statePermits?: Maybe<Scalars['String']>;
  statePermitsUnbound?: Maybe<Scalars['String']>;
  statePermitsExpiration?: Maybe<Scalars['DateTime']>;
  statePermitsFile?: Maybe<CloudFileResponse>;
  newMexicoLogin?: Maybe<Scalars['String']>;
  newMexicoLoginUnbound?: Maybe<Scalars['String']>;
  newMexicoLoginFile?: Maybe<CloudFileResponse>;
  newMexicoPassword?: Maybe<Scalars['String']>;
  newMexicoPasswordUnbound?: Maybe<Scalars['String']>;
  newMexicoPasswordFile?: Maybe<CloudFileResponse>;
  otherPermitInfo?: Maybe<Scalars['String']>;
  otherPermitInfoUnbound?: Maybe<Scalars['String']>;
  otherPermitInfoFile?: Maybe<CloudFileResponse>;
  notes?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AuthProviderDataResponse = {
  thirdPartyId: Scalars['String'];
  provider: Scalars['String'];
};

export type AuthRoleResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  permits: Array<PermitsResponse>;
};

export type AuthUserResponse = {
  userId: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  roles: Array<AuthRoleResponse>;
  username?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  isAdmin: Scalars['Boolean'];
  avatarFile?: Maybe<CloudFileResponse>;
};

export type AvailablePermitsResponse = {
  module: App_Modules;
  actions: Array<Action_List>;
};

export type BooleanFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
};

export type ChangePasswordInput = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['ID'];
};

export type ClientFilterFilter = {
  and?: Maybe<Array<ClientFilterFilter>>;
  or?: Maybe<Array<ClientFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ClientResponse = {
  id: Scalars['ID'];
  clientSince?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  tax?: Maybe<SolvedEntityResponse>;
  mc?: Maybe<Scalars['String']>;
  ofTrucks?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  stateProvince?: Maybe<Scalars['String']>;
  zipPostalCode?: Maybe<Scalars['String']>;
  contacEmail?: Maybe<Scalars['String']>;
  conactOficePhone?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CloudFileIdResponse = {
  key: Scalars['String'];
  url: Scalars['String'];
};

export type CloudFileResponse = {
  id: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CorporationEinFilterFilter = {
  and?: Maybe<Array<CorporationEinFilterFilter>>;
  or?: Maybe<Array<CorporationEinFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type CorporationEinResponse = {
  id: Scalars['ID'];
  client?: Maybe<SolvedEntityResponse>;
  documentType: DocumentType;
  expiration: Scalars['DateTime'];
  expires: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateAccountingInput = {
  date: Scalars['DateTime'];
  paymentAmount: Scalars['Float'];
  achDate: Scalars['String'];
  file?: Maybe<Scalars['ID']>;
};

export type CreateAnnualVehInspStateRermitsInput = {
  annualVehInspReport?: Maybe<Scalars['String']>;
  annualVehInspReportUnbound?: Maybe<Scalars['String']>;
  annualVehInspReportFile?: Maybe<Scalars['ID']>;
  statePermits?: Maybe<Scalars['String']>;
  statePermitsUnbound?: Maybe<Scalars['String']>;
  statePermitsExpiration?: Maybe<Scalars['DateTime']>;
  statePermitsFile?: Maybe<Scalars['ID']>;
  newMexicoLogin?: Maybe<Scalars['String']>;
  newMexicoLoginUnbound?: Maybe<Scalars['String']>;
  newMexicoLoginFile?: Maybe<Scalars['ID']>;
  newMexicoPassword?: Maybe<Scalars['String']>;
  newMexicoPasswordUnbound?: Maybe<Scalars['String']>;
  newMexicoPasswordFile?: Maybe<Scalars['ID']>;
  otherPermitInfo?: Maybe<Scalars['String']>;
  otherPermitInfoUnbound?: Maybe<Scalars['String']>;
  otherPermitInfoFile?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
};

export type CreateClientInput = {
  clientSince?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  tax?: Maybe<Scalars['ID']>;
  mc?: Maybe<Scalars['String']>;
  ofTrucks?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  stateProvince?: Maybe<Scalars['String']>;
  zipPostalCode?: Maybe<Scalars['String']>;
  contacEmail?: Maybe<Scalars['String']>;
  conactOficePhone?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
};

export type CreateCorporationEinInput = {
  client?: Maybe<Scalars['ID']>;
  documentType: DocumentType;
  expiration: Scalars['DateTime'];
  expires: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
};

export type CreateDotInfoInput = {
  dot?: Maybe<Scalars['String']>;
  dotDetail?: Maybe<Scalars['String']>;
  dotExpiration?: Maybe<Scalars['DateTime']>;
  dotFile?: Maybe<Scalars['ID']>;
  mc?: Maybe<Scalars['String']>;
  mcDetail?: Maybe<Scalars['String']>;
  mcFile?: Maybe<Scalars['ID']>;
  taxId?: Maybe<Scalars['String']>;
  taxIdDetail?: Maybe<Scalars['String']>;
  taxIdFile?: Maybe<Scalars['ID']>;
  dotPin?: Maybe<Scalars['String']>;
  dotPinDetail?: Maybe<Scalars['String']>;
  dotPinFile?: Maybe<Scalars['ID']>;
  mcPin?: Maybe<Scalars['String']>;
  mcPinDetail?: Maybe<Scalars['String']>;
  mcPinFile?: Maybe<Scalars['ID']>;
  scac?: Maybe<Scalars['String']>;
  scacDetail?: Maybe<Scalars['String']>;
  scacExpiration?: Maybe<Scalars['DateTime']>;
  scacFile?: Maybe<Scalars['ID']>;
  ucr?: Maybe<Scalars['String']>;
  ucrDetail?: Maybe<Scalars['String']>;
  ucrExpiration?: Maybe<Scalars['DateTime']>;
  ucrFile?: Maybe<Scalars['ID']>;
  bocThree?: Maybe<Scalars['String']>;
  bocThreeDetail?: Maybe<Scalars['String']>;
  bocThreeFile?: Maybe<Scalars['ID']>;
  docRoadInspection?: Maybe<Scalars['String']>;
  docRoadInspectionDetail?: Maybe<Scalars['String']>;
  docRoadInspectionFile?: Maybe<Scalars['ID']>;
  docAudits?: Maybe<Scalars['String']>;
  docAuditsDetail?: Maybe<Scalars['String']>;
  docAuditsFile?: Maybe<Scalars['ID']>;
  otherDotDocument?: Maybe<Scalars['String']>;
  otherDotDocumentDetail?: Maybe<Scalars['String']>;
  otherDotDocumentFile?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
};

export type CreateDriverFilesInput = {
  name?: Maybe<Scalars['String']>;
  dni?: Maybe<Scalars['String']>;
  driveLicense?: Maybe<Scalars['String']>;
  driveLicenseFile?: Maybe<Scalars['ID']>;
  driveLicenseExpiration?: Maybe<Scalars['DateTime']>;
  medicalCardFile?: Maybe<Scalars['ID']>;
  medicalCardExpiration?: Maybe<Scalars['DateTime']>;
  mvrFile?: Maybe<Scalars['ID']>;
  mvrExpiration?: Maybe<Scalars['DateTime']>;
  socialSecurityFile?: Maybe<Scalars['ID']>;
  socialSecurityExpiration?: Maybe<Scalars['DateTime']>;
  driverFile?: Maybe<Scalars['ID']>;
  driverSignedContractFile?: Maybe<Scalars['ID']>;
  inquiryToPreviousEmployerFile?: Maybe<Scalars['ID']>;
  drugsTestFile?: Maybe<Scalars['ID']>;
  clearingHouseFile?: Maybe<Scalars['ID']>;
  clearingHouseExpiration?: Maybe<Scalars['DateTime']>;
  readInspectionsNoaFile?: Maybe<Scalars['ID']>;
  otherDocuments?: Maybe<Scalars['ID']>;
};

export type CreateFilesInput = {
  url: Scalars['String'];
  key: Scalars['String'];
  filename: Scalars['String'];
  bytes?: Maybe<Scalars['Float']>;
  storage: FileStorageType;
  status: FileStatus;
};

export type CreateFinancedEquipmentInput = {
  saleAmount: Scalars['String'];
  saleDate: Scalars['String'];
  monthlyPayment: Scalars['String'];
  lastPaymentDate: Scalars['String'];
  financeAgreementDocuments?: Maybe<Scalars['ID']>;
  repairsCostReceiptsText: Scalars['String'];
  repairsCostReceiptsFile?: Maybe<Scalars['ID']>;
  truckVin?: Maybe<Scalars['String']>;
  payOffList?: Maybe<Scalars['ID']>;
};

export type CreateIftaFuelTaxesInput = {
  iftaAccount?: Maybe<Scalars['String']>;
  iftaAccountDetail?: Maybe<Scalars['String']>;
  iftaAccountExpiration?: Maybe<Scalars['DateTime']>;
  iftaAccountFile?: Maybe<Scalars['ID']>;
  iftaApplRenewalsChanges?: Maybe<Scalars['String']>;
  iftaApplRenewalsChangesDetail?: Maybe<Scalars['String']>;
  iftaApplRenewalsChangesFile?: Maybe<Scalars['ID']>;
  fuelTaxes?: Maybe<Scalars['String']>;
  fuelTaxesDetail?: Maybe<Scalars['String']>;
  fuelTaxesExpiration?: Maybe<Scalars['DateTime']>;
  fuelTaxesFile?: Maybe<Scalars['ID']>;
  otherIftaRequest?: Maybe<Scalars['String']>;
  otherIftaRequestDetail?: Maybe<Scalars['String']>;
  otherIftaRequestExpiration?: Maybe<Scalars['DateTime']>;
  otherIftaRequestFile?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
};

export type CreateIrpRoadTaxesInput = {
  irpAccount?: Maybe<Scalars['String']>;
  irpAccountDetail?: Maybe<Scalars['String']>;
  irpExpiration?: Maybe<Scalars['DateTime']>;
  irpFile?: Maybe<Scalars['ID']>;
  certificateTitle: Scalars['String'];
  certificateTitleDetail?: Maybe<Scalars['String']>;
  certificateTitleFile?: Maybe<Scalars['ID']>;
  tag?: Maybe<Scalars['String']>;
  tagDetail?: Maybe<Scalars['String']>;
  tagExpiration?: Maybe<Scalars['DateTime']>;
  tagFile?: Maybe<Scalars['ID']>;
  roadTax?: Maybe<Scalars['String']>;
  roadTaxDetail?: Maybe<Scalars['String']>;
  roadTaxExpiration?: Maybe<Scalars['DateTime']>;
  roadTaxFile?: Maybe<Scalars['ID']>;
  leaseAgreement?: Maybe<Scalars['String']>;
  leaseAgreementDetail?: Maybe<Scalars['String']>;
  leaseAgreementFile?: Maybe<Scalars['ID']>;
  irpApplicationsRenewals?: Maybe<Scalars['String']>;
  irpApplicationsRenewalsDetail?: Maybe<Scalars['String']>;
  irpApplicationsRenewalsFile?: Maybe<Scalars['ID']>;
  otherIrpRequest?: Maybe<Scalars['String']>;
  otherIrpRequestDetail?: Maybe<Scalars['String']>;
  otherIrpRequestFile?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
};

export type CreateRoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  permits: Array<PermitsInput>;
};

export type CreateSubstanceComplianceClearinghouseInput = {
  drugRandomEnrollment?: Maybe<Scalars['String']>;
  drugRandomEnrollmentDetail?: Maybe<Scalars['String']>;
  drugRandomEnrollmentExpiration?: Maybe<Scalars['DateTime']>;
  drugRandomEnrollmentFile?: Maybe<Scalars['ID']>;
  reasonableSuspicious?: Maybe<Scalars['String']>;
  reasonableSuspiciousDetail?: Maybe<Scalars['String']>;
  reasonableSuspiciousExpiration?: Maybe<Scalars['DateTime']>;
  reasonableSuspiciousFile?: Maybe<Scalars['ID']>;
  clearingHouseLogin?: Maybe<Scalars['String']>;
  clearingHouseLoginDetail?: Maybe<Scalars['String']>;
  clearingHouseLoginFile?: Maybe<Scalars['ID']>;
  clearingHousePassword?: Maybe<Scalars['String']>;
  clearingHousePasswordDetail?: Maybe<Scalars['String']>;
  clearingHousePasswordFile?: Maybe<Scalars['ID']>;
  clearingHouseRegQueries?: Maybe<Scalars['String']>;
  clearingHouseRegQueriesDetail?: Maybe<Scalars['String']>;
  clearingHouseRegQueriesFile?: Maybe<Scalars['ID']>;
  otherSubstanceRequest?: Maybe<Scalars['String']>;
  otherSubstanceRequestDetail?: Maybe<Scalars['String']>;
  otherSubstanceRequestFile?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
};

export type CreateTaxesInput = {
  name: Scalars['String'];
  tax: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateTenantInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
  info?: Maybe<TenantInfoInput>;
};

export type CreateTrailerRentalInput = {
  unit: Scalars['String'];
  vin: Scalars['String'];
  tag: Scalars['String'];
  year: Scalars['String'];
  make: Scalars['String'];
  model: Scalars['String'];
  rentalDate: Scalars['DateTime'];
  rentalAmount: Scalars['Float'];
  file?: Maybe<Scalars['ID']>;
};

export type CreateUploadedFileInput = {
  key: Scalars['String'];
  storage?: Maybe<FileStorageType>;
  toRemove?: Maybe<Scalars['String']>;
  isVideo?: Maybe<Scalars['Boolean']>;
};

export type CreateUserAreaInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  roles: Array<Scalars['ID']>;
  profile?: Maybe<ProfileInput>;
  isActive?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  avatarFile?: Maybe<Scalars['ID']>;
};

export type CreateUserPositionInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateYardRentalInput = {
  truck: Scalars['String'];
  truckColor: Scalars['String'];
  tag: Scalars['String'];
  rentalDate: Scalars['DateTime'];
  rentalAmount: Scalars['Float'];
  file?: Maybe<Scalars['ID']>;
};

export type DateFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['DateTime']>;
  neq?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  between?: Maybe<DateFieldComparisonBetween>;
  notBetween?: Maybe<DateFieldComparisonBetween>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};


export type DeleteAccountingInput = {
  entityId: Scalars['ID'];
};

export type DeleteAnnualVehInspStateRermitsInput = {
  entityId: Scalars['ID'];
};

export type DeleteClientInput = {
  entityId: Scalars['ID'];
};

export type DeleteCorporationEinInput = {
  entityId: Scalars['ID'];
};

export type DeleteDotInfoInput = {
  entityId: Scalars['ID'];
};

export type DeleteDriverFilesInput = {
  entityId: Scalars['ID'];
};

export type DeleteFilesInput = {
  entityId: Scalars['ID'];
};

export type DeleteFinancedEquipmentInput = {
  entityId: Scalars['ID'];
};

export type DeleteIftaFuelTaxesInput = {
  entityId: Scalars['ID'];
};

export type DeleteIrpRoadTaxesInput = {
  entityId: Scalars['ID'];
};

export type DeleteManyAccountingInput = {
  where?: Maybe<AccountingFilterFilter>;
};

export type DeleteManyAnnualVehInspStateRermitsInput = {
  where?: Maybe<AnnualVehInspStateRermitsFilterFilter>;
};

export type DeleteManyClientInput = {
  where?: Maybe<ClientFilterFilter>;
};

export type DeleteManyCorporationEinInput = {
  where?: Maybe<CorporationEinFilterFilter>;
};

export type DeleteManyDotInfoInput = {
  where?: Maybe<DotInfoFilterFilter>;
};

export type DeleteManyDriverFilesInput = {
  where?: Maybe<DriverFilesFilterFilter>;
};

export type DeleteManyFilesInput = {
  where?: Maybe<FilesFilterFilter>;
};

export type DeleteManyFinancedEquipmentInput = {
  where?: Maybe<FinancedEquipmentFilterFilter>;
};

export type DeleteManyIftaFuelTaxesInput = {
  where?: Maybe<IftaFuelTaxesFilterFilter>;
};

export type DeleteManyIrpRoadTaxesInput = {
  where?: Maybe<IrpRoadTaxesFilterFilter>;
};

export type DeleteManyNotificationInput = {
  where?: Maybe<NotificationFilterFilter>;
};

export type DeleteManyRoleInput = {
  where?: Maybe<RoleFilterFilter>;
};

export type DeleteManySubstanceComplianceClearinghouseInput = {
  where?: Maybe<SubstanceComplianceClearinghouseFilterFilter>;
};

export type DeleteManyTaxesInput = {
  where?: Maybe<TaxesFilterFilter>;
};

export type DeleteManyTrailerRentalInput = {
  where?: Maybe<TrailerRentalFilterFilter>;
};

export type DeleteManyUserAreaInput = {
  where?: Maybe<UserAreaFilterFilter>;
};

export type DeleteManyUserInput = {
  where?: Maybe<UserFilterFilter>;
};

export type DeleteManyUserPositionInput = {
  where?: Maybe<UserPositionFilterFilter>;
};

export type DeleteManyYardRentalInput = {
  where?: Maybe<YardRentalFilterFilter>;
};

export type DeleteNotificationInput = {
  entityId: Scalars['ID'];
};

export type DeleteRoleInput = {
  entityId: Scalars['ID'];
};

export type DeleteSubstanceComplianceClearinghouseInput = {
  entityId: Scalars['ID'];
};

export type DeleteTaxesInput = {
  entityId: Scalars['ID'];
};

export type DeleteTenantInput = {
  entityId: Scalars['ID'];
};

export type DeleteTrailerRentalInput = {
  entityId: Scalars['ID'];
};

export type DeleteUserAreaInput = {
  entityId: Scalars['ID'];
};

export type DeleteUserInput = {
  entityId: Scalars['ID'];
};

export type DeleteUserPositionInput = {
  entityId: Scalars['ID'];
};

export type DeleteYardRentalInput = {
  entityId: Scalars['ID'];
};

export enum DocumentType {
  ArticlesOfIncorporation = 'ARTICLES_OF_INCORPORATION',
  EinIrs = 'EIN_IRS',
  OwnerDriverLicense = 'OWNER_DRIVER_LICENSE',
  OwnerSocialSecurityNumber = 'OWNER_SOCIAL_SECURITY_NUMBER'
}

export type DotInfoFilterFilter = {
  and?: Maybe<Array<DotInfoFilterFilter>>;
  or?: Maybe<Array<DotInfoFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type DotInfoResponse = {
  id: Scalars['ID'];
  dot?: Maybe<Scalars['String']>;
  dotDetail?: Maybe<Scalars['String']>;
  dotExpiration?: Maybe<Scalars['DateTime']>;
  dotFile?: Maybe<CloudFileResponse>;
  mc?: Maybe<Scalars['String']>;
  mcDetail?: Maybe<Scalars['String']>;
  mcFile?: Maybe<CloudFileResponse>;
  taxId?: Maybe<Scalars['String']>;
  taxIdDetail?: Maybe<Scalars['String']>;
  taxIdFile?: Maybe<CloudFileResponse>;
  dotPin?: Maybe<Scalars['String']>;
  dotPinDetail?: Maybe<Scalars['String']>;
  dotPinFile?: Maybe<CloudFileResponse>;
  mcPin?: Maybe<Scalars['String']>;
  mcPinDetail?: Maybe<Scalars['String']>;
  mcPinFile?: Maybe<CloudFileResponse>;
  scac?: Maybe<Scalars['String']>;
  scacDetail?: Maybe<Scalars['String']>;
  scacExpiration?: Maybe<Scalars['DateTime']>;
  scacFile?: Maybe<CloudFileResponse>;
  ucr?: Maybe<Scalars['String']>;
  ucrDetail?: Maybe<Scalars['String']>;
  ucrExpiration?: Maybe<Scalars['DateTime']>;
  ucrFile?: Maybe<CloudFileResponse>;
  bocThree?: Maybe<Scalars['String']>;
  bocThreeDetail?: Maybe<Scalars['String']>;
  bocThreeFile?: Maybe<CloudFileResponse>;
  docRoadInspection?: Maybe<Scalars['String']>;
  docRoadInspectionDetail?: Maybe<Scalars['String']>;
  docRoadInspectionFile?: Maybe<CloudFileResponse>;
  docAudits?: Maybe<Scalars['String']>;
  docAuditsDetail?: Maybe<Scalars['String']>;
  docAuditsFile?: Maybe<CloudFileResponse>;
  otherDotDocument?: Maybe<Scalars['String']>;
  otherDotDocumentDetail?: Maybe<Scalars['String']>;
  otherDotDocumentFile?: Maybe<CloudFileResponse>;
  notes?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DriverFilesFilterFilter = {
  and?: Maybe<Array<DriverFilesFilterFilter>>;
  or?: Maybe<Array<DriverFilesFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type DriverFilesResponse = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  dni?: Maybe<Scalars['String']>;
  driveLicense?: Maybe<Scalars['String']>;
  driveLicenseFile?: Maybe<CloudFileResponse>;
  driveLicenseExpiration?: Maybe<Scalars['DateTime']>;
  medicalCardFile?: Maybe<CloudFileResponse>;
  medicalCardExpiration?: Maybe<Scalars['DateTime']>;
  mvrFile?: Maybe<CloudFileResponse>;
  mvrExpiration?: Maybe<Scalars['DateTime']>;
  socialSecurityFile?: Maybe<CloudFileResponse>;
  socialSecurityExpiration?: Maybe<Scalars['DateTime']>;
  driverFile?: Maybe<CloudFileResponse>;
  driverSignedContractFile?: Maybe<CloudFileResponse>;
  inquiryToPreviousEmployerFile?: Maybe<CloudFileResponse>;
  drugsTestFile?: Maybe<CloudFileResponse>;
  clearingHouseFile?: Maybe<CloudFileResponse>;
  clearingHouseExpiration?: Maybe<Scalars['DateTime']>;
  readInspectionsNoaFile?: Maybe<CloudFileResponse>;
  otherDocuments?: Maybe<CloudFileResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EntityFieldsResponse = {
  field: Scalars['String'];
  value: Scalars['String'];
};

export enum FileStatus {
  Unused = 'UNUSED',
  Processing = 'PROCESSING',
  Ok = 'OK'
}

export enum FileStorageType {
  Aws = 'AWS',
  Local = 'LOCAL',
  Cloudinary = 'CLOUDINARY',
  Other = 'OTHER'
}

export type FilesFilterFilter = {
  and?: Maybe<Array<FilesFilterFilter>>;
  or?: Maybe<Array<FilesFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  url?: Maybe<StringFieldComparison>;
  key?: Maybe<StringFieldComparison>;
  filename?: Maybe<StringFieldComparison>;
  bytes?: Maybe<StringFieldComparison>;
  storage?: Maybe<StringFieldComparison>;
  status?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FilesResponse = {
  id: Scalars['ID'];
  url: Scalars['String'];
  key: Scalars['String'];
  filename: Scalars['String'];
  bytes?: Maybe<Scalars['Float']>;
  storage: FileStorageType;
  status: FileStatus;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FinancedEquipmentFilterFilter = {
  and?: Maybe<Array<FinancedEquipmentFilterFilter>>;
  or?: Maybe<Array<FinancedEquipmentFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FinancedEquipmentResponse = {
  id: Scalars['ID'];
  saleAmount: Scalars['String'];
  saleDate: Scalars['String'];
  monthlyPayment: Scalars['String'];
  lastPaymentDate: Scalars['String'];
  financeAgreementDocuments?: Maybe<CloudFileResponse>;
  repairsCostReceiptsText: Scalars['String'];
  repairsCostReceiptsFile?: Maybe<CloudFileResponse>;
  truckVin?: Maybe<Scalars['String']>;
  payOffList?: Maybe<CloudFileResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
  redirectTo: Scalars['String'];
};

export type GenderFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<UserGender>;
  neq?: Maybe<UserGender>;
  gt?: Maybe<UserGender>;
  gte?: Maybe<UserGender>;
  lt?: Maybe<UserGender>;
  lte?: Maybe<UserGender>;
  like?: Maybe<UserGender>;
  notLike?: Maybe<UserGender>;
  iLike?: Maybe<UserGender>;
  notILike?: Maybe<UserGender>;
  in?: Maybe<Array<UserGender>>;
  notIn?: Maybe<Array<UserGender>>;
};

export type GetAllAccountingInput = {
  where?: Maybe<AccountingFilterFilter>;
  orderBy?: Maybe<OrderByAccountingInput>;
};

export type GetAllAnnualVehInspStateRermitsInput = {
  where?: Maybe<AnnualVehInspStateRermitsFilterFilter>;
  orderBy?: Maybe<OrderByAnnualVehInspStateRermitsInput>;
};

export type GetAllClientInput = {
  where?: Maybe<ClientFilterFilter>;
  orderBy?: Maybe<OrderByClientInput>;
};

export type GetAllCorporationEinInput = {
  where?: Maybe<CorporationEinFilterFilter>;
  orderBy?: Maybe<OrderByCorporationEinInput>;
};

export type GetAllDotInfoInput = {
  where?: Maybe<DotInfoFilterFilter>;
  orderBy?: Maybe<OrderByDotInfoInput>;
};

export type GetAllDriverFilesInput = {
  where?: Maybe<DriverFilesFilterFilter>;
  orderBy?: Maybe<OrderByDriverFilesInput>;
};

export type GetAllFinancedEquipmentInput = {
  where?: Maybe<FinancedEquipmentFilterFilter>;
  orderBy?: Maybe<OrderByFinancedEquipmentInput>;
};

export type GetAllIftaFuelTaxesInput = {
  where?: Maybe<IftaFuelTaxesFilterFilter>;
  orderBy?: Maybe<OrderByIftaFuelTaxesInput>;
};

export type GetAllIrpRoadTaxesInput = {
  where?: Maybe<IrpRoadTaxesFilterFilter>;
  orderBy?: Maybe<OrderByIrpRoadTaxesInput>;
};

export type GetAllNotificationInput = {
  where?: Maybe<NotificationFilterFilter>;
  orderBy?: Maybe<OrderByNotificationInput>;
};

export type GetAllRoleInput = {
  where?: Maybe<RoleFilterFilter>;
  orderBy?: Maybe<OrderByRoleInput>;
};

export type GetAllSubstanceComplianceClearinghouseInput = {
  where?: Maybe<SubstanceComplianceClearinghouseFilterFilter>;
  orderBy?: Maybe<OrderBySubstanceComplianceClearinghouseInput>;
};

export type GetAllTaxesInput = {
  where?: Maybe<TaxesFilterFilter>;
  orderBy?: Maybe<OrderByTaxesInput>;
};

export type GetAllTenantsInput = {
  where?: Maybe<TenantFilterFilter>;
  orderBy?: Maybe<OrderByTenantInput>;
};

export type GetAllTrailerRentalInput = {
  where?: Maybe<TrailerRentalFilterFilter>;
  orderBy?: Maybe<OrderByTrailerRentalInput>;
};

export type GetAllUserAreaInput = {
  where?: Maybe<UserAreaFilterFilter>;
  orderBy?: Maybe<OrderByUserAreaInput>;
};

export type GetAllUserPositionInput = {
  where?: Maybe<UserPositionFilterFilter>;
  orderBy?: Maybe<OrderByUserPositionInput>;
};

export type GetAllUsersInput = {
  where?: Maybe<UserFilterFilter>;
  orderBy?: Maybe<OrderByUserInput>;
};

export type GetAllYardRentalInput = {
  where?: Maybe<YardRentalFilterFilter>;
  orderBy?: Maybe<OrderByYardRentalInput>;
};

export type GetOneAccountingInput = {
  where?: Maybe<AccountingFilterFilter>;
};

export type GetOneAnnualVehInspStateRermitsInput = {
  where?: Maybe<AnnualVehInspStateRermitsFilterFilter>;
};

export type GetOneClientInput = {
  where?: Maybe<ClientFilterFilter>;
};

export type GetOneCorporationEinInput = {
  where?: Maybe<CorporationEinFilterFilter>;
};

export type GetOneDotInfoInput = {
  where?: Maybe<DotInfoFilterFilter>;
};

export type GetOneDriverFilesInput = {
  where?: Maybe<DriverFilesFilterFilter>;
};

export type GetOneFilesInput = {
  where?: Maybe<FilesFilterFilter>;
};

export type GetOneFinancedEquipmentInput = {
  where?: Maybe<FinancedEquipmentFilterFilter>;
};

export type GetOneIftaFuelTaxesInput = {
  where?: Maybe<IftaFuelTaxesFilterFilter>;
};

export type GetOneIrpRoadTaxesInput = {
  where?: Maybe<IrpRoadTaxesFilterFilter>;
};

export type GetOneNotificationInput = {
  where?: Maybe<NotificationFilterFilter>;
};

export type GetOneRoleInput = {
  where?: Maybe<RoleFilterFilter>;
};

export type GetOneSubstanceComplianceClearinghouseInput = {
  where?: Maybe<SubstanceComplianceClearinghouseFilterFilter>;
};

export type GetOneTaxesInput = {
  where?: Maybe<TaxesFilterFilter>;
};

export type GetOneTenantInput = {
  where?: Maybe<TenantFilterFilter>;
};

export type GetOneTrailerRentalInput = {
  where?: Maybe<TrailerRentalFilterFilter>;
};

export type GetOneUserAreaInput = {
  where?: Maybe<UserAreaFilterFilter>;
};

export type GetOneUserInput = {
  where?: Maybe<UserFilterFilter>;
  orderBy?: Maybe<OrderByUserInput>;
};

export type GetOneUserPositionInput = {
  where?: Maybe<UserPositionFilterFilter>;
};

export type GetOneYardRentalInput = {
  where?: Maybe<YardRentalFilterFilter>;
};

export type GetPaginatedAccountingInput = {
  paginator: PaginatorParams;
  where?: Maybe<AccountingFilterFilter>;
  orderBy?: Maybe<OrderByAccountingInput>;
};

export type GetPaginatedAnnualVehInspStateRermitsInput = {
  paginator: PaginatorParams;
  where?: Maybe<AnnualVehInspStateRermitsFilterFilter>;
  orderBy?: Maybe<OrderByAnnualVehInspStateRermitsInput>;
};

export type GetPaginatedClientInput = {
  paginator: PaginatorParams;
  where?: Maybe<ClientFilterFilter>;
  orderBy?: Maybe<OrderByClientInput>;
};

export type GetPaginatedCorporationEinInput = {
  paginator: PaginatorParams;
  where?: Maybe<CorporationEinFilterFilter>;
  orderBy?: Maybe<OrderByCorporationEinInput>;
};

export type GetPaginatedDotInfoInput = {
  paginator: PaginatorParams;
  where?: Maybe<DotInfoFilterFilter>;
  orderBy?: Maybe<OrderByDotInfoInput>;
};

export type GetPaginatedDriverFilesInput = {
  paginator: PaginatorParams;
  where?: Maybe<DriverFilesFilterFilter>;
  orderBy?: Maybe<OrderByDriverFilesInput>;
};

export type GetPaginatedFilesInput = {
  paginator: PaginatorParams;
  where?: Maybe<FilesFilterFilter>;
  orderBy?: Maybe<OrderByFilesInput>;
};

export type GetPaginatedFinancedEquipmentInput = {
  paginator: PaginatorParams;
  where?: Maybe<FinancedEquipmentFilterFilter>;
  orderBy?: Maybe<OrderByFinancedEquipmentInput>;
};

export type GetPaginatedIftaFuelTaxesInput = {
  paginator: PaginatorParams;
  where?: Maybe<IftaFuelTaxesFilterFilter>;
  orderBy?: Maybe<OrderByIftaFuelTaxesInput>;
};

export type GetPaginatedIrpRoadTaxesInput = {
  paginator: PaginatorParams;
  where?: Maybe<IrpRoadTaxesFilterFilter>;
  orderBy?: Maybe<OrderByIrpRoadTaxesInput>;
};

export type GetPaginatedNotificationInput = {
  paginator: PaginatorParams;
  where?: Maybe<NotificationFilterFilter>;
  orderBy?: Maybe<OrderByNotificationInput>;
};

export type GetPaginatedRoleInput = {
  paginator: PaginatorParams;
  where?: Maybe<RoleFilterFilter>;
  orderBy?: Maybe<OrderByRoleInput>;
};

export type GetPaginatedSubstanceComplianceClearinghouseInput = {
  paginator: PaginatorParams;
  where?: Maybe<SubstanceComplianceClearinghouseFilterFilter>;
  orderBy?: Maybe<OrderBySubstanceComplianceClearinghouseInput>;
};

export type GetPaginatedTaxesInput = {
  paginator: PaginatorParams;
  where?: Maybe<TaxesFilterFilter>;
  orderBy?: Maybe<OrderByTaxesInput>;
};

export type GetPaginatedTenantInput = {
  paginator: PaginatorParams;
  where?: Maybe<TenantFilterFilter>;
  orderBy?: Maybe<OrderByTenantInput>;
};

export type GetPaginatedTrailerRentalInput = {
  paginator: PaginatorParams;
  where?: Maybe<TrailerRentalFilterFilter>;
  orderBy?: Maybe<OrderByTrailerRentalInput>;
};

export type GetPaginatedUserAreaInput = {
  paginator: PaginatorParams;
  where?: Maybe<UserAreaFilterFilter>;
  orderBy?: Maybe<OrderByUserAreaInput>;
};

export type GetPaginatedUserPositionInput = {
  paginator: PaginatorParams;
  where?: Maybe<UserPositionFilterFilter>;
  orderBy?: Maybe<OrderByUserPositionInput>;
};

export type GetPaginatedUsersInput = {
  paginator: PaginatorParams;
  where?: Maybe<UserFilterFilter>;
  orderBy?: Maybe<OrderByUserInput>;
};

export type GetPaginatedYardRentalInput = {
  paginator: PaginatorParams;
  where?: Maybe<YardRentalFilterFilter>;
  orderBy?: Maybe<OrderByYardRentalInput>;
};

export type GetUploadSignedUrlInput = {
  filename: Scalars['String'];
  contentType: Scalars['String'];
};

export type GraphQlFilterFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<ProfileFilterFilter>;
  neq?: Maybe<ProfileFilterFilter>;
  gt?: Maybe<ProfileFilterFilter>;
  gte?: Maybe<ProfileFilterFilter>;
  lt?: Maybe<ProfileFilterFilter>;
  lte?: Maybe<ProfileFilterFilter>;
  like?: Maybe<ProfileFilterFilter>;
  notLike?: Maybe<ProfileFilterFilter>;
  iLike?: Maybe<ProfileFilterFilter>;
  notILike?: Maybe<ProfileFilterFilter>;
  in?: Maybe<Array<ProfileFilterFilter>>;
  notIn?: Maybe<Array<ProfileFilterFilter>>;
};

export type I18nMessageResponse = {
  es: Scalars['String'];
  en: Scalars['String'];
  de?: Maybe<Scalars['String']>;
  pt?: Maybe<Scalars['String']>;
  it?: Maybe<Scalars['String']>;
  ru?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
};

export type IdFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['ID']>;
  neq?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  like?: Maybe<Scalars['ID']>;
  notLike?: Maybe<Scalars['ID']>;
  iLike?: Maybe<Scalars['ID']>;
  notILike?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  notIn?: Maybe<Array<Scalars['ID']>>;
};

export type IftaFuelTaxesFilterFilter = {
  and?: Maybe<Array<IftaFuelTaxesFilterFilter>>;
  or?: Maybe<Array<IftaFuelTaxesFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  irpAiftaAccountccount?: Maybe<StringFieldComparison>;
  iftaApplRenewalsChanges?: Maybe<StringFieldComparison>;
  otherIftaRequest?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type IftaFuelTaxesResponse = {
  id: Scalars['ID'];
  iftaAccount?: Maybe<Scalars['String']>;
  iftaAccountDetail?: Maybe<Scalars['String']>;
  iftaAccountExpiration?: Maybe<Scalars['DateTime']>;
  iftaAccountFile?: Maybe<CloudFileResponse>;
  iftaApplRenewalsChanges?: Maybe<Scalars['String']>;
  iftaApplRenewalsChangesDetail?: Maybe<Scalars['String']>;
  iftaApplRenewalsChangesFile?: Maybe<CloudFileResponse>;
  fuelTaxes?: Maybe<Scalars['String']>;
  fuelTaxesDetail?: Maybe<Scalars['String']>;
  fuelTaxesExpiration?: Maybe<Scalars['DateTime']>;
  fuelTaxesFile?: Maybe<CloudFileResponse>;
  otherIftaRequest?: Maybe<Scalars['String']>;
  otherIftaRequestDetail?: Maybe<Scalars['String']>;
  otherIftaRequestExpiration?: Maybe<Scalars['DateTime']>;
  otherIftaRequestFile?: Maybe<CloudFileResponse>;
  notes?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IrpRoadTaxesFilterFilter = {
  and?: Maybe<Array<IrpRoadTaxesFilterFilter>>;
  or?: Maybe<Array<IrpRoadTaxesFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  irpAccount?: Maybe<StringFieldComparison>;
  certificateTitle?: Maybe<StringFieldComparison>;
  tag?: Maybe<StringFieldComparison>;
  roadTax?: Maybe<StringFieldComparison>;
  leaseAgreement?: Maybe<StringFieldComparison>;
  irpApplicationsRenewals?: Maybe<StringFieldComparison>;
  otherIrpRequest?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type IrpRoadTaxesResponse = {
  id: Scalars['ID'];
  irpAccount: Scalars['String'];
  irpAccountDetail?: Maybe<Scalars['String']>;
  irpExpiration?: Maybe<Scalars['DateTime']>;
  irpFile?: Maybe<CloudFileResponse>;
  certificateTitle: Scalars['String'];
  certificateTitleDetail?: Maybe<Scalars['String']>;
  certificateTitleFile?: Maybe<CloudFileResponse>;
  tag?: Maybe<Scalars['String']>;
  tagDetail?: Maybe<Scalars['String']>;
  tagFile?: Maybe<CloudFileResponse>;
  roadTax?: Maybe<Scalars['String']>;
  roadTaxDetail?: Maybe<Scalars['String']>;
  roadTaxExpiration?: Maybe<Scalars['DateTime']>;
  roadTaxFile?: Maybe<CloudFileResponse>;
  leaseAgreement?: Maybe<Scalars['String']>;
  leaseAgreementDetail?: Maybe<Scalars['String']>;
  leaseAgreementFile?: Maybe<CloudFileResponse>;
  irpApplicationsRenewals?: Maybe<Scalars['String']>;
  irpApplicationsRenewalsDetail?: Maybe<Scalars['String']>;
  irpApplicationsRenewalsFile?: Maybe<CloudFileResponse>;
  otherIrpRequest?: Maybe<Scalars['String']>;
  otherIrpRequestDetail?: Maybe<Scalars['String']>;
  otherIrpRequestFile?: Maybe<CloudFileResponse>;
  notes?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JwtAuthenticatedResponse = {
  user: AuthUserResponse;
  roles: Array<AuthRoleResponse>;
  providerData: AuthProviderDataResponse;
  access_token: Scalars['String'];
};

export type Mutation = {
  createTenant?: Maybe<Scalars['Void']>;
  updateTenant?: Maybe<Scalars['Void']>;
  deleteTenant?: Maybe<Scalars['Void']>;
  createUser?: Maybe<Scalars['Void']>;
  updateUser?: Maybe<Scalars['Void']>;
  deleteUser?: Maybe<Scalars['Void']>;
  deleteManyUser?: Maybe<Scalars['Void']>;
  changePassword?: Maybe<Scalars['Void']>;
  resetPassword?: Maybe<Scalars['Void']>;
  updateMe?: Maybe<Scalars['Void']>;
  updateNotification?: Maybe<Scalars['Void']>;
  deleteNotification?: Maybe<Scalars['Void']>;
  deleteManyNotification?: Maybe<Scalars['Void']>;
  sendNotification?: Maybe<Scalars['Void']>;
  createRole?: Maybe<Scalars['Void']>;
  updateRole?: Maybe<Scalars['Void']>;
  deleteRole?: Maybe<Scalars['Void']>;
  deleteManyRole?: Maybe<Scalars['Void']>;
  createUserArea?: Maybe<Scalars['Void']>;
  updateUserArea?: Maybe<Scalars['Void']>;
  deleteUserArea?: Maybe<Scalars['Void']>;
  deleteManyUserArea?: Maybe<Scalars['Void']>;
  createUserPosition?: Maybe<Scalars['Void']>;
  updateUserPosition?: Maybe<Scalars['Void']>;
  deleteUserPosition?: Maybe<Scalars['Void']>;
  deleteManyUserPosition?: Maybe<Scalars['Void']>;
  signIn: JwtAuthenticatedResponse;
  signUp?: Maybe<Scalars['Void']>;
  confirmUser?: Maybe<Scalars['Void']>;
  forgotPassword?: Maybe<Scalars['Void']>;
  createUploadedFile?: Maybe<Scalars['Void']>;
  createFiles?: Maybe<Scalars['Void']>;
  updateFiles?: Maybe<Scalars['Void']>;
  deleteFiles?: Maybe<Scalars['Void']>;
  deleteManyFiles?: Maybe<Scalars['Void']>;
  createClient?: Maybe<Scalars['Void']>;
  updateClient?: Maybe<Scalars['Void']>;
  deleteClient?: Maybe<Scalars['Void']>;
  deleteManyClient?: Maybe<Scalars['Void']>;
  createTaxes?: Maybe<Scalars['Void']>;
  updateTaxes?: Maybe<Scalars['Void']>;
  deleteTaxes?: Maybe<Scalars['Void']>;
  deleteManyTaxes?: Maybe<Scalars['Void']>;
  createCorporationEin?: Maybe<Scalars['Void']>;
  updateCorporationEin?: Maybe<Scalars['Void']>;
  deleteCorporationEin?: Maybe<Scalars['Void']>;
  deleteManyCorporationEin?: Maybe<Scalars['Void']>;
  createIrpRoadTaxes?: Maybe<Scalars['Void']>;
  updateIrpRoadTaxes?: Maybe<Scalars['Void']>;
  deleteIrpRoadTaxes?: Maybe<Scalars['Void']>;
  deleteManyIrpRoadTaxes?: Maybe<Scalars['Void']>;
  createIftaFuelTaxes?: Maybe<Scalars['Void']>;
  updateIftaFuelTaxes?: Maybe<Scalars['Void']>;
  deleteIftaFuelTaxes?: Maybe<Scalars['Void']>;
  deleteManyIftaFuelTaxes?: Maybe<Scalars['Void']>;
  createSubstanceComplianceClearinghouse?: Maybe<Scalars['Void']>;
  updateSubstanceComplianceClearinghouse?: Maybe<Scalars['Void']>;
  deleteSubstanceComplianceClearinghouse?: Maybe<Scalars['Void']>;
  deleteManySubstanceComplianceClearinghouse?: Maybe<Scalars['Void']>;
  createDriverFiles?: Maybe<Scalars['Void']>;
  updateDriverFiles?: Maybe<Scalars['Void']>;
  deleteDriverFiles?: Maybe<Scalars['Void']>;
  deleteManyDriverFiles?: Maybe<Scalars['Void']>;
  createDotInfo?: Maybe<Scalars['Void']>;
  updateDotInfo?: Maybe<Scalars['Void']>;
  deleteDotInfo?: Maybe<Scalars['Void']>;
  deleteManyDotInfo?: Maybe<Scalars['Void']>;
  createAnnualVehInspStateRermits?: Maybe<Scalars['Void']>;
  updateAnnualVehInspStateRermits?: Maybe<Scalars['Void']>;
  deleteAnnualVehInspStateRermits?: Maybe<Scalars['Void']>;
  deleteManyAnnualVehInspStateRermits?: Maybe<Scalars['Void']>;
  createTrailerRental?: Maybe<Scalars['Void']>;
  updateTrailerRental?: Maybe<Scalars['Void']>;
  deleteTrailerRental?: Maybe<Scalars['Void']>;
  deleteManyTrailerRental?: Maybe<Scalars['Void']>;
  createYardRental?: Maybe<Scalars['Void']>;
  updateYardRental?: Maybe<Scalars['Void']>;
  deleteYardRental?: Maybe<Scalars['Void']>;
  deleteManyYardRental?: Maybe<Scalars['Void']>;
  createFinancedEquipment?: Maybe<Scalars['Void']>;
  updateFinancedEquipment?: Maybe<Scalars['Void']>;
  deleteFinancedEquipment?: Maybe<Scalars['Void']>;
  deleteManyFinancedEquipment?: Maybe<Scalars['Void']>;
  createAccounting?: Maybe<Scalars['Void']>;
  updateAccounting?: Maybe<Scalars['Void']>;
  deleteAccounting?: Maybe<Scalars['Void']>;
  deleteManyAccounting?: Maybe<Scalars['Void']>;
};


export type MutationCreateTenantArgs = {
  input: CreateTenantInput;
};


export type MutationUpdateTenantArgs = {
  input: UpdateTenantInput;
};


export type MutationDeleteTenantArgs = {
  input: DeleteTenantInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteManyUserArgs = {
  input: DeleteManyUserInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationUpdateMeArgs = {
  input: UpdateMeInput;
};


export type MutationUpdateNotificationArgs = {
  input: UpdateNotificationInput;
};


export type MutationDeleteNotificationArgs = {
  input: DeleteNotificationInput;
};


export type MutationDeleteManyNotificationArgs = {
  input: DeleteManyNotificationInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};


export type MutationDeleteManyRoleArgs = {
  input: DeleteManyRoleInput;
};


export type MutationCreateUserAreaArgs = {
  input: CreateUserAreaInput;
};


export type MutationUpdateUserAreaArgs = {
  input: UpdateUserAreaInput;
};


export type MutationDeleteUserAreaArgs = {
  input: DeleteUserAreaInput;
};


export type MutationDeleteManyUserAreaArgs = {
  input: DeleteManyUserAreaInput;
};


export type MutationCreateUserPositionArgs = {
  input: CreateUserPositionInput;
};


export type MutationUpdateUserPositionArgs = {
  input: UpdateUserPositionInput;
};


export type MutationDeleteUserPositionArgs = {
  input: DeleteUserPositionInput;
};


export type MutationDeleteManyUserPositionArgs = {
  input: DeleteManyUserPositionInput;
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationCreateUploadedFileArgs = {
  input: CreateUploadedFileInput;
};


export type MutationCreateFilesArgs = {
  input: CreateFilesInput;
};


export type MutationUpdateFilesArgs = {
  input: UpdateFilesInput;
};


export type MutationDeleteFilesArgs = {
  input: DeleteFilesInput;
};


export type MutationDeleteManyFilesArgs = {
  input: DeleteManyFilesInput;
};


export type MutationCreateClientArgs = {
  input: CreateClientInput;
};


export type MutationUpdateClientArgs = {
  input: UpdateClientInput;
};


export type MutationDeleteClientArgs = {
  input: DeleteClientInput;
};


export type MutationDeleteManyClientArgs = {
  input: DeleteManyClientInput;
};


export type MutationCreateTaxesArgs = {
  input: CreateTaxesInput;
};


export type MutationUpdateTaxesArgs = {
  input: UpdateTaxesInput;
};


export type MutationDeleteTaxesArgs = {
  input: DeleteTaxesInput;
};


export type MutationDeleteManyTaxesArgs = {
  input: DeleteManyTaxesInput;
};


export type MutationCreateCorporationEinArgs = {
  input: CreateCorporationEinInput;
};


export type MutationUpdateCorporationEinArgs = {
  input: UpdateCorporationEinInput;
};


export type MutationDeleteCorporationEinArgs = {
  input: DeleteCorporationEinInput;
};


export type MutationDeleteManyCorporationEinArgs = {
  input: DeleteManyCorporationEinInput;
};


export type MutationCreateIrpRoadTaxesArgs = {
  input: CreateIrpRoadTaxesInput;
};


export type MutationUpdateIrpRoadTaxesArgs = {
  input: UpdateIrpRoadTaxesInput;
};


export type MutationDeleteIrpRoadTaxesArgs = {
  input: DeleteIrpRoadTaxesInput;
};


export type MutationDeleteManyIrpRoadTaxesArgs = {
  input: DeleteManyIrpRoadTaxesInput;
};


export type MutationCreateIftaFuelTaxesArgs = {
  input: CreateIftaFuelTaxesInput;
};


export type MutationUpdateIftaFuelTaxesArgs = {
  input: UpdateIftaFuelTaxesInput;
};


export type MutationDeleteIftaFuelTaxesArgs = {
  input: DeleteIftaFuelTaxesInput;
};


export type MutationDeleteManyIftaFuelTaxesArgs = {
  input: DeleteManyIftaFuelTaxesInput;
};


export type MutationCreateSubstanceComplianceClearinghouseArgs = {
  input: CreateSubstanceComplianceClearinghouseInput;
};


export type MutationUpdateSubstanceComplianceClearinghouseArgs = {
  input: UpdateSubstanceComplianceClearinghouseInput;
};


export type MutationDeleteSubstanceComplianceClearinghouseArgs = {
  input: DeleteSubstanceComplianceClearinghouseInput;
};


export type MutationDeleteManySubstanceComplianceClearinghouseArgs = {
  input: DeleteManySubstanceComplianceClearinghouseInput;
};


export type MutationCreateDriverFilesArgs = {
  input: CreateDriverFilesInput;
};


export type MutationUpdateDriverFilesArgs = {
  input: UpdateDriverFilesInput;
};


export type MutationDeleteDriverFilesArgs = {
  input: DeleteDriverFilesInput;
};


export type MutationDeleteManyDriverFilesArgs = {
  input: DeleteManyDriverFilesInput;
};


export type MutationCreateDotInfoArgs = {
  input: CreateDotInfoInput;
};


export type MutationUpdateDotInfoArgs = {
  input: UpdateDotInfoInput;
};


export type MutationDeleteDotInfoArgs = {
  input: DeleteDotInfoInput;
};


export type MutationDeleteManyDotInfoArgs = {
  input: DeleteManyDotInfoInput;
};


export type MutationCreateAnnualVehInspStateRermitsArgs = {
  input: CreateAnnualVehInspStateRermitsInput;
};


export type MutationUpdateAnnualVehInspStateRermitsArgs = {
  input: UpdateAnnualVehInspStateRermitsInput;
};


export type MutationDeleteAnnualVehInspStateRermitsArgs = {
  input: DeleteAnnualVehInspStateRermitsInput;
};


export type MutationDeleteManyAnnualVehInspStateRermitsArgs = {
  input: DeleteManyAnnualVehInspStateRermitsInput;
};


export type MutationCreateTrailerRentalArgs = {
  input: CreateTrailerRentalInput;
};


export type MutationUpdateTrailerRentalArgs = {
  input: UpdateTrailerRentalInput;
};


export type MutationDeleteTrailerRentalArgs = {
  input: DeleteTrailerRentalInput;
};


export type MutationDeleteManyTrailerRentalArgs = {
  input: DeleteManyTrailerRentalInput;
};


export type MutationCreateYardRentalArgs = {
  input: CreateYardRentalInput;
};


export type MutationUpdateYardRentalArgs = {
  input: UpdateYardRentalInput;
};


export type MutationDeleteYardRentalArgs = {
  input: DeleteYardRentalInput;
};


export type MutationDeleteManyYardRentalArgs = {
  input: DeleteManyYardRentalInput;
};


export type MutationCreateFinancedEquipmentArgs = {
  input: CreateFinancedEquipmentInput;
};


export type MutationUpdateFinancedEquipmentArgs = {
  input: UpdateFinancedEquipmentInput;
};


export type MutationDeleteFinancedEquipmentArgs = {
  input: DeleteFinancedEquipmentInput;
};


export type MutationDeleteManyFinancedEquipmentArgs = {
  input: DeleteManyFinancedEquipmentInput;
};


export type MutationCreateAccountingArgs = {
  input: CreateAccountingInput;
};


export type MutationUpdateAccountingArgs = {
  input: UpdateAccountingInput;
};


export type MutationDeleteAccountingArgs = {
  input: DeleteAccountingInput;
};


export type MutationDeleteManyAccountingArgs = {
  input: DeleteManyAccountingInput;
};

export type NotificationFilterFilter = {
  and?: Maybe<Array<NotificationFilterFilter>>;
  or?: Maybe<Array<NotificationFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  type?: Maybe<NotificationTypeFilterComparison>;
  isRead?: Maybe<BooleanFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type NotificationResponse = {
  id: Scalars['ID'];
  message?: Maybe<I18nMessageResponse>;
  type?: Maybe<NotificationType>;
  isRead?: Maybe<Scalars['Boolean']>;
  toUser?: Maybe<SolvedEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum NotificationType {
  ReactionPost = 'REACTION_POST',
  ReactionComment = 'REACTION_COMMENT',
  ReactionProject = 'REACTION_PROJECT',
  ReactionProjectComment = 'REACTION_PROJECT_COMMENT',
  ResponseComment = 'RESPONSE_COMMENT',
  CommentPost = 'COMMENT_POST',
  CommentProject = 'COMMENT_PROJECT',
  ForgotPassword = 'FORGOT_PASSWORD',
  Internal = 'INTERNAL',
  TicketCreated = 'TICKET_CREATED',
  TicketResponse = 'TICKET_RESPONSE',
  CalendarEventInvited = 'CALENDAR_EVENT_INVITED',
  CalendarEventUpdated = 'CALENDAR_EVENT_UPDATED',
  CalendarEventDeleted = 'CALENDAR_EVENT_DELETED',
  CreatedCourse = 'CREATED_COURSE',
  CreatedProject = 'CREATED_PROJECT',
  CreatedCertification = 'CREATED_CERTIFICATION',
  CreatedLessonComment = 'CREATED_LESSON_COMMENT',
  FinishLesson = 'FINISH_LESSON',
  ApprovalFinalExam = 'APPROVAL_FINAL_EXAM',
  ApprovalQuiz = 'APPROVAL_QUIZ',
  DisapprovalFinalExam = 'DISAPPROVAL_FINAL_EXAM',
  DisapprovalQuiz = 'DISAPPROVAL_QUIZ',
  TranscodeError = 'TRANSCODE_ERROR',
  TranscodeSuccess = 'TRANSCODE_SUCCESS'
}

export type NotificationTypeFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<NotificationType>;
  neq?: Maybe<NotificationType>;
  gt?: Maybe<NotificationType>;
  gte?: Maybe<NotificationType>;
  lt?: Maybe<NotificationType>;
  lte?: Maybe<NotificationType>;
  like?: Maybe<NotificationType>;
  notLike?: Maybe<NotificationType>;
  iLike?: Maybe<NotificationType>;
  notILike?: Maybe<NotificationType>;
  in?: Maybe<Array<NotificationType>>;
  notIn?: Maybe<Array<NotificationType>>;
};

export type OrderByAccountingInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByAnnualVehInspStateRermitsInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByClientInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByCorporationEinInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByDotInfoInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByDriverFilesInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByFilesInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByFinancedEquipmentInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByIftaFuelTaxesInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByIrpRoadTaxesInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByNotificationInput = {
  type?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByRoleInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderBySubstanceComplianceClearinghouseInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByTaxesInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  tax?: Maybe<OrderByType>;
  taxType?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByTenantInput = {
  id?: Maybe<OrderByType>;
  updatedAt?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
  code?: Maybe<OrderByType>;
  name?: Maybe<OrderByType>;
  email?: Maybe<OrderByType>;
};

export type OrderByTrailerRentalInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export enum OrderByType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderByUserAreaInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByUserInput = {
  id?: Maybe<OrderByType>;
  updatedAt?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
  email?: Maybe<OrderByType>;
  username?: Maybe<OrderByType>;
  firstname?: Maybe<OrderByType>;
  lastname?: Maybe<OrderByType>;
  lastLogin?: Maybe<OrderByType>;
};

export type OrderByUserPositionInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByYardRentalInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export enum Provider {
  Local = 'LOCAL',
  Google = 'GOOGLE'
}

export type PaginatedAccountingResponse = {
  items: Array<AccountingResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedAnnualVehInspStateRermitsResponse = {
  items: Array<AnnualVehInspStateRermitsResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedClientResponse = {
  items: Array<ClientResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedCorporationEinResponse = {
  items: Array<CorporationEinResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedDotInfoResponse = {
  items: Array<DotInfoResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedDriverFilesResponse = {
  items: Array<DriverFilesResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedFilesResponse = {
  items: Array<FilesResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedFinancedEquipmentResponse = {
  items: Array<FinancedEquipmentResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedIftaFuelTaxesResponse = {
  items: Array<IftaFuelTaxesResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedIrpRoadTaxesResponse = {
  items: Array<IrpRoadTaxesResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedNotificationResponse = {
  items: Array<NotificationResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedRoleResponse = {
  items: Array<RoleResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedSubstanceComplianceClearinghouseResponse = {
  items: Array<SubstanceComplianceClearinghouseResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedTaxesResponse = {
  items: Array<TaxesResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedTenantResponse = {
  items: Array<TenantResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedTrailerRentalResponse = {
  items: Array<TrailerRentalResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedUserAreaResponse = {
  items: Array<UserAreaResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedUserPositionResponse = {
  items: Array<UserPositionResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedUsers = {
  items: Array<UserResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedYardRentalResponse = {
  items: Array<YardRentalResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatorParams = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type PartialAccountingInput = {
  date?: Maybe<Scalars['DateTime']>;
  paymentAmount?: Maybe<Scalars['Float']>;
  achDate?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['ID']>;
};

export type PartialAnnualVehInspStateRermitsInput = {
  annualVehInspReport?: Maybe<Scalars['String']>;
  annualVehInspReportUnbound?: Maybe<Scalars['String']>;
  annualVehInspReportFile?: Maybe<Scalars['ID']>;
  statePermits?: Maybe<Scalars['String']>;
  statePermitsUnbound?: Maybe<Scalars['String']>;
  statePermitsExpiration?: Maybe<Scalars['DateTime']>;
  statePermitsFile?: Maybe<Scalars['ID']>;
  newMexicoLogin?: Maybe<Scalars['String']>;
  newMexicoLoginUnbound?: Maybe<Scalars['String']>;
  newMexicoLoginFile?: Maybe<Scalars['ID']>;
  newMexicoPassword?: Maybe<Scalars['String']>;
  newMexicoPasswordUnbound?: Maybe<Scalars['String']>;
  newMexicoPasswordFile?: Maybe<Scalars['ID']>;
  otherPermitInfo?: Maybe<Scalars['String']>;
  otherPermitInfoUnbound?: Maybe<Scalars['String']>;
  otherPermitInfoFile?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
};

export type PartialClientInput = {
  clientSince?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  tax?: Maybe<Scalars['ID']>;
  mc?: Maybe<Scalars['String']>;
  ofTrucks?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  stateProvince?: Maybe<Scalars['String']>;
  zipPostalCode?: Maybe<Scalars['String']>;
  contacEmail?: Maybe<Scalars['String']>;
  conactOficePhone?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
};

export type PartialCorporationEinInput = {
  client?: Maybe<Scalars['ID']>;
  documentType?: Maybe<DocumentType>;
  expiration?: Maybe<Scalars['DateTime']>;
  expires?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
};

export type PartialDotInfoInput = {
  dot?: Maybe<Scalars['String']>;
  dotDetail?: Maybe<Scalars['String']>;
  dotExpiration?: Maybe<Scalars['DateTime']>;
  dotFile?: Maybe<Scalars['ID']>;
  mc?: Maybe<Scalars['String']>;
  mcDetail?: Maybe<Scalars['String']>;
  mcFile?: Maybe<Scalars['ID']>;
  taxId?: Maybe<Scalars['String']>;
  taxIdDetail?: Maybe<Scalars['String']>;
  taxIdFile?: Maybe<Scalars['ID']>;
  dotPin?: Maybe<Scalars['String']>;
  dotPinDetail?: Maybe<Scalars['String']>;
  dotPinFile?: Maybe<Scalars['ID']>;
  mcPin?: Maybe<Scalars['String']>;
  mcPinDetail?: Maybe<Scalars['String']>;
  mcPinFile?: Maybe<Scalars['ID']>;
  scac?: Maybe<Scalars['String']>;
  scacDetail?: Maybe<Scalars['String']>;
  scacExpiration?: Maybe<Scalars['DateTime']>;
  scacFile?: Maybe<Scalars['ID']>;
  ucr?: Maybe<Scalars['String']>;
  ucrDetail?: Maybe<Scalars['String']>;
  ucrExpiration?: Maybe<Scalars['DateTime']>;
  ucrFile?: Maybe<Scalars['ID']>;
  bocThree?: Maybe<Scalars['String']>;
  bocThreeDetail?: Maybe<Scalars['String']>;
  bocThreeFile?: Maybe<Scalars['ID']>;
  docRoadInspection?: Maybe<Scalars['String']>;
  docRoadInspectionDetail?: Maybe<Scalars['String']>;
  docRoadInspectionFile?: Maybe<Scalars['ID']>;
  docAudits?: Maybe<Scalars['String']>;
  docAuditsDetail?: Maybe<Scalars['String']>;
  docAuditsFile?: Maybe<Scalars['ID']>;
  otherDotDocument?: Maybe<Scalars['String']>;
  otherDotDocumentDetail?: Maybe<Scalars['String']>;
  otherDotDocumentFile?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
};

export type PartialDriverFilesInput = {
  name?: Maybe<Scalars['String']>;
  dni?: Maybe<Scalars['String']>;
  driveLicense?: Maybe<Scalars['String']>;
  driveLicenseFile?: Maybe<Scalars['ID']>;
  driveLicenseExpiration?: Maybe<Scalars['DateTime']>;
  medicalCardFile?: Maybe<Scalars['ID']>;
  medicalCardExpiration?: Maybe<Scalars['DateTime']>;
  mvrFile?: Maybe<Scalars['ID']>;
  mvrExpiration?: Maybe<Scalars['DateTime']>;
  socialSecurityFile?: Maybe<Scalars['ID']>;
  socialSecurityExpiration?: Maybe<Scalars['DateTime']>;
  driverFile?: Maybe<Scalars['ID']>;
  driverSignedContractFile?: Maybe<Scalars['ID']>;
  inquiryToPreviousEmployerFile?: Maybe<Scalars['ID']>;
  drugsTestFile?: Maybe<Scalars['ID']>;
  clearingHouseFile?: Maybe<Scalars['ID']>;
  clearingHouseExpiration?: Maybe<Scalars['DateTime']>;
  readInspectionsNoaFile?: Maybe<Scalars['ID']>;
  otherDocuments?: Maybe<Scalars['ID']>;
};

export type PartialFilesInput = {
  url?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  bytes?: Maybe<Scalars['Float']>;
  storage?: Maybe<FileStorageType>;
  status?: Maybe<FileStatus>;
};

export type PartialFinancedEquipmentInput = {
  saleAmount?: Maybe<Scalars['String']>;
  saleDate?: Maybe<Scalars['String']>;
  monthlyPayment?: Maybe<Scalars['String']>;
  lastPaymentDate?: Maybe<Scalars['String']>;
  financeAgreementDocuments?: Maybe<Scalars['ID']>;
  repairsCostReceiptsText?: Maybe<Scalars['String']>;
  repairsCostReceiptsFile?: Maybe<Scalars['ID']>;
  truckVin?: Maybe<Scalars['String']>;
  payOffList?: Maybe<Scalars['ID']>;
};

export type PartialIftaFuelTaxesInput = {
  iftaAccount?: Maybe<Scalars['String']>;
  iftaAccountDetail?: Maybe<Scalars['String']>;
  iftaAccountExpiration?: Maybe<Scalars['DateTime']>;
  iftaAccountFile?: Maybe<Scalars['ID']>;
  iftaApplRenewalsChanges?: Maybe<Scalars['String']>;
  iftaApplRenewalsChangesDetail?: Maybe<Scalars['String']>;
  iftaApplRenewalsChangesFile?: Maybe<Scalars['ID']>;
  fuelTaxes?: Maybe<Scalars['String']>;
  fuelTaxesDetail?: Maybe<Scalars['String']>;
  fuelTaxesExpiration?: Maybe<Scalars['DateTime']>;
  fuelTaxesFile?: Maybe<Scalars['ID']>;
  otherIftaRequest?: Maybe<Scalars['String']>;
  otherIftaRequestDetail?: Maybe<Scalars['String']>;
  otherIftaRequestExpiration?: Maybe<Scalars['DateTime']>;
  otherIftaRequestFile?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
};

export type PartialIrpRoadTaxesInput = {
  irpAccount?: Maybe<Scalars['String']>;
  irpAccountDetail?: Maybe<Scalars['String']>;
  irpExpiration?: Maybe<Scalars['DateTime']>;
  irpFile?: Maybe<Scalars['ID']>;
  certificateTitle?: Maybe<Scalars['String']>;
  certificateTitleDetail?: Maybe<Scalars['String']>;
  certificateTitleFile?: Maybe<Scalars['ID']>;
  tag?: Maybe<Scalars['String']>;
  tagDetail?: Maybe<Scalars['String']>;
  tagExpiration?: Maybe<Scalars['DateTime']>;
  tagFile?: Maybe<Scalars['ID']>;
  roadTax?: Maybe<Scalars['String']>;
  roadTaxDetail?: Maybe<Scalars['String']>;
  roadTaxExpiration?: Maybe<Scalars['DateTime']>;
  roadTaxFile?: Maybe<Scalars['ID']>;
  leaseAgreement?: Maybe<Scalars['String']>;
  leaseAgreementDetail?: Maybe<Scalars['String']>;
  leaseAgreementFile?: Maybe<Scalars['ID']>;
  irpApplicationsRenewals?: Maybe<Scalars['String']>;
  irpApplicationsRenewalsDetail?: Maybe<Scalars['String']>;
  irpApplicationsRenewalsFile?: Maybe<Scalars['ID']>;
  otherIrpRequest?: Maybe<Scalars['String']>;
  otherIrpRequestDetail?: Maybe<Scalars['String']>;
  otherIrpRequestFile?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
};

export type PartialNotificationInput = {
  isRead?: Maybe<Scalars['Boolean']>;
};

export type PartialPermitsInput = {
  module?: Maybe<App_Modules>;
  action?: Maybe<Action_List>;
};

export type PartialProfileInput = {
  country?: Maybe<Scalars['String']>;
  gender?: Maybe<UserGender>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  birthDay?: Maybe<Scalars['String']>;
  personalWeb?: Maybe<Scalars['String']>;
  btcWallet?: Maybe<Scalars['String']>;
  tronWallet?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  aboutMe?: Maybe<Scalars['String']>;
  isLeader?: Maybe<Scalars['Boolean']>;
  area?: Maybe<Scalars['ID']>;
  position?: Maybe<Scalars['ID']>;
};

export type PartialRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  permits?: Maybe<Array<PartialPermitsInput>>;
};

export type PartialSubstanceComplianceClearinghouseInput = {
  drugRandomEnrollment?: Maybe<Scalars['String']>;
  drugRandomEnrollmentDetail?: Maybe<Scalars['String']>;
  drugRandomEnrollmentExpiration?: Maybe<Scalars['DateTime']>;
  drugRandomEnrollmentFile?: Maybe<Scalars['ID']>;
  reasonableSuspicious?: Maybe<Scalars['String']>;
  reasonableSuspiciousDetail?: Maybe<Scalars['String']>;
  reasonableSuspiciousExpiration?: Maybe<Scalars['DateTime']>;
  reasonableSuspiciousFile?: Maybe<Scalars['ID']>;
  clearingHouseLogin?: Maybe<Scalars['String']>;
  clearingHouseLoginDetail?: Maybe<Scalars['String']>;
  clearingHouseLoginFile?: Maybe<Scalars['ID']>;
  clearingHousePassword?: Maybe<Scalars['String']>;
  clearingHousePasswordDetail?: Maybe<Scalars['String']>;
  clearingHousePasswordFile?: Maybe<Scalars['ID']>;
  clearingHouseRegQueries?: Maybe<Scalars['String']>;
  clearingHouseRegQueriesDetail?: Maybe<Scalars['String']>;
  clearingHouseRegQueriesFile?: Maybe<Scalars['ID']>;
  otherSubstanceRequest?: Maybe<Scalars['String']>;
  otherSubstanceRequestDetail?: Maybe<Scalars['String']>;
  otherSubstanceRequestFile?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
};

export type PartialTaxesInput = {
  name?: Maybe<Scalars['String']>;
  tax?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialTenantInput = {
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  info?: Maybe<TenantInfoInput>;
};

export type PartialTrailerRentalInput = {
  unit?: Maybe<Scalars['String']>;
  vin?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  rentalDate?: Maybe<Scalars['DateTime']>;
  rentalAmount?: Maybe<Scalars['Float']>;
  file?: Maybe<Scalars['ID']>;
};

export type PartialUserAreaInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialUserInput = {
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['ID']>>;
  isActive?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  avatarFile?: Maybe<Scalars['ID']>;
  profile?: Maybe<PartialProfileInput>;
};

export type PartialUserPositionInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialYardRentalInput = {
  truck?: Maybe<Scalars['String']>;
  truckColor?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  rentalDate?: Maybe<Scalars['DateTime']>;
  rentalAmount?: Maybe<Scalars['Float']>;
  file?: Maybe<Scalars['ID']>;
};

export type PermitsInput = {
  module: App_Modules;
  action: Action_List;
};

export type PermitsResponse = {
  module: App_Modules;
  action: Action_List;
};

export type ProfileFilterFilter = {
  and?: Maybe<Array<ProfileFilterFilter>>;
  or?: Maybe<Array<ProfileFilterFilter>>;
  country?: Maybe<StringFieldComparison>;
  gender?: Maybe<GenderFilterComparison>;
  zipCode?: Maybe<StringFieldComparison>;
  city?: Maybe<StringFieldComparison>;
  address?: Maybe<StringFieldComparison>;
  state?: Maybe<StringFieldComparison>;
  birthDay?: Maybe<StringFieldComparison>;
  personalWeb?: Maybe<StringFieldComparison>;
  btcWallet?: Maybe<StringFieldComparison>;
  tronWallet?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  aboutMe?: Maybe<StringFieldComparison>;
  isLeader?: Maybe<BooleanFieldComparison>;
  area?: Maybe<IdFilterComparison>;
  position?: Maybe<IdFilterComparison>;
};

export type ProfileInput = {
  country?: Maybe<Scalars['String']>;
  gender?: Maybe<UserGender>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  birthDay?: Maybe<Scalars['String']>;
  personalWeb?: Maybe<Scalars['String']>;
  btcWallet?: Maybe<Scalars['String']>;
  tronWallet?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  aboutMe?: Maybe<Scalars['String']>;
  isLeader?: Maybe<Scalars['Boolean']>;
  area?: Maybe<Scalars['ID']>;
  position?: Maybe<Scalars['ID']>;
};

export type ProfileResponse = {
  country?: Maybe<Scalars['String']>;
  gender?: Maybe<UserGender>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  birthDay?: Maybe<Scalars['String']>;
  personalWeb?: Maybe<Scalars['String']>;
  btcWallet?: Maybe<Scalars['String']>;
  tronWallet?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  aboutMe?: Maybe<Scalars['String']>;
  isLeader?: Maybe<Scalars['Boolean']>;
  area?: Maybe<SolvedEntityResponse>;
  position?: Maybe<SolvedEntityResponse>;
};

export type Query = {
  getAllTenant?: Maybe<Array<TenantResponse>>;
  getRequestTenant?: Maybe<TenantResponse>;
  getOneTenant?: Maybe<TenantResponse>;
  getAllSimplifiedTenantsInfo?: Maybe<Array<SimplifiedTenantResponse>>;
  getPaginatedTenant: PaginatedTenantResponse;
  getAllUsers: Array<UserResponse>;
  getOneUser: UserResponse;
  getPaginatedUser: PaginatedUsers;
  getMyProfile?: Maybe<ProfileResponse>;
  getUserProfile?: Maybe<ProfileResponse>;
  getAllNotification?: Maybe<Array<NotificationResponse>>;
  getOneNotification?: Maybe<NotificationResponse>;
  getPaginatedNotification?: Maybe<PaginatedNotificationResponse>;
  getAllRole: Array<RoleResponse>;
  getOneRole?: Maybe<RoleResponse>;
  getPaginatedRole?: Maybe<PaginatedRoleResponse>;
  getAvailablePermits: Array<AvailablePermitsResponse>;
  getAllUserArea?: Maybe<Array<UserAreaResponse>>;
  getOneUserArea?: Maybe<UserAreaResponse>;
  getPaginatedUserArea?: Maybe<PaginatedUserAreaResponse>;
  getAllUserPosition?: Maybe<Array<UserPositionResponse>>;
  getOneUserPosition?: Maybe<UserPositionResponse>;
  getPaginatedUserPosition?: Maybe<PaginatedUserPositionResponse>;
  myInfo?: Maybe<AuthUserResponse>;
  verifyToken: Scalars['Boolean'];
  getWriteSignedUrl: CloudFileIdResponse;
  getOneFiles?: Maybe<FilesResponse>;
  getPaginatedFiles?: Maybe<PaginatedFilesResponse>;
  getAllClient: Array<ClientResponse>;
  getOneClient?: Maybe<ClientResponse>;
  getPaginatedClient?: Maybe<PaginatedClientResponse>;
  getAllTaxes: Array<TaxesResponse>;
  getOneTaxes?: Maybe<TaxesResponse>;
  getPaginatedTaxes?: Maybe<PaginatedTaxesResponse>;
  getAllCorporationEin: Array<CorporationEinResponse>;
  getOneCorporationEin?: Maybe<CorporationEinResponse>;
  getPaginatedCorporationEin?: Maybe<PaginatedCorporationEinResponse>;
  getAllIrpRoadTaxes: Array<IrpRoadTaxesResponse>;
  getOneIrpRoadTaxes?: Maybe<IrpRoadTaxesResponse>;
  getPaginatedIrpRoadTaxes?: Maybe<PaginatedIrpRoadTaxesResponse>;
  getAllIftaFuelTaxes: Array<IftaFuelTaxesResponse>;
  getOneIftaFuelTaxes?: Maybe<IftaFuelTaxesResponse>;
  getPaginatedIftaFuelTaxes?: Maybe<PaginatedIftaFuelTaxesResponse>;
  getAllSubstanceComplianceClearinghouse: Array<SubstanceComplianceClearinghouseResponse>;
  getOneSubstanceComplianceClearinghouse?: Maybe<SubstanceComplianceClearinghouseResponse>;
  getPaginatedSubstanceComplianceClearinghouse?: Maybe<PaginatedSubstanceComplianceClearinghouseResponse>;
  getAllDriverFiles: Array<DriverFilesResponse>;
  getOneDriverFiles?: Maybe<DriverFilesResponse>;
  getPaginatedDriverFiles?: Maybe<PaginatedDriverFilesResponse>;
  getAllDotInfo: Array<DotInfoResponse>;
  getOneDotInfo?: Maybe<DotInfoResponse>;
  getPaginatedDotInfo?: Maybe<PaginatedDotInfoResponse>;
  getAllAnnualVehInspStateRermits: Array<AnnualVehInspStateRermitsResponse>;
  getOneAnnualVehInspStateRermits?: Maybe<AnnualVehInspStateRermitsResponse>;
  getPaginatedAnnualVehInspStateRermits?: Maybe<PaginatedAnnualVehInspStateRermitsResponse>;
  getAllTrailerRental: Array<TrailerRentalResponse>;
  getOneTrailerRental?: Maybe<TrailerRentalResponse>;
  getPaginatedTrailerRental?: Maybe<PaginatedTrailerRentalResponse>;
  getAllYardRental: Array<YardRentalResponse>;
  getOneYardRental?: Maybe<YardRentalResponse>;
  getPaginatedYardRental?: Maybe<PaginatedYardRentalResponse>;
  getAllFinancedEquipment: Array<FinancedEquipmentResponse>;
  getOneFinancedEquipment?: Maybe<FinancedEquipmentResponse>;
  getPaginatedFinancedEquipment?: Maybe<PaginatedFinancedEquipmentResponse>;
  getAllAccounting: Array<AccountingResponse>;
  getOneAccounting?: Maybe<AccountingResponse>;
  getPaginatedAccounting?: Maybe<PaginatedAccountingResponse>;
};


export type QueryGetAllTenantArgs = {
  input: GetAllTenantsInput;
};


export type QueryGetOneTenantArgs = {
  input: GetOneTenantInput;
};


export type QueryGetAllSimplifiedTenantsInfoArgs = {
  input: GetAllTenantsInput;
};


export type QueryGetPaginatedTenantArgs = {
  input?: Maybe<GetPaginatedTenantInput>;
};


export type QueryGetAllUsersArgs = {
  input?: Maybe<GetAllUsersInput>;
};


export type QueryGetOneUserArgs = {
  input?: Maybe<GetOneUserInput>;
};


export type QueryGetPaginatedUserArgs = {
  input?: Maybe<GetPaginatedUsersInput>;
};


export type QueryGetUserProfileArgs = {
  userId: Scalars['ID'];
};


export type QueryGetAllNotificationArgs = {
  input?: Maybe<GetAllNotificationInput>;
};


export type QueryGetOneNotificationArgs = {
  input?: Maybe<GetOneNotificationInput>;
};


export type QueryGetPaginatedNotificationArgs = {
  input?: Maybe<GetPaginatedNotificationInput>;
};


export type QueryGetAllRoleArgs = {
  input?: Maybe<GetAllRoleInput>;
};


export type QueryGetOneRoleArgs = {
  input?: Maybe<GetOneRoleInput>;
};


export type QueryGetPaginatedRoleArgs = {
  input?: Maybe<GetPaginatedRoleInput>;
};


export type QueryGetAvailablePermitsArgs = {
  input?: Maybe<GetAllRoleInput>;
};


export type QueryGetAllUserAreaArgs = {
  input?: Maybe<GetAllUserAreaInput>;
};


export type QueryGetOneUserAreaArgs = {
  input?: Maybe<GetOneUserAreaInput>;
};


export type QueryGetPaginatedUserAreaArgs = {
  input?: Maybe<GetPaginatedUserAreaInput>;
};


export type QueryGetAllUserPositionArgs = {
  input?: Maybe<GetAllUserPositionInput>;
};


export type QueryGetOneUserPositionArgs = {
  input?: Maybe<GetOneUserPositionInput>;
};


export type QueryGetPaginatedUserPositionArgs = {
  input?: Maybe<GetPaginatedUserPositionInput>;
};


export type QueryGetWriteSignedUrlArgs = {
  input: GetUploadSignedUrlInput;
};


export type QueryGetOneFilesArgs = {
  input?: Maybe<GetOneFilesInput>;
};


export type QueryGetPaginatedFilesArgs = {
  input?: Maybe<GetPaginatedFilesInput>;
};


export type QueryGetAllClientArgs = {
  input?: Maybe<GetAllClientInput>;
};


export type QueryGetOneClientArgs = {
  input?: Maybe<GetOneClientInput>;
};


export type QueryGetPaginatedClientArgs = {
  input?: Maybe<GetPaginatedClientInput>;
};


export type QueryGetAllTaxesArgs = {
  input?: Maybe<GetAllTaxesInput>;
};


export type QueryGetOneTaxesArgs = {
  input?: Maybe<GetOneTaxesInput>;
};


export type QueryGetPaginatedTaxesArgs = {
  input?: Maybe<GetPaginatedTaxesInput>;
};


export type QueryGetAllCorporationEinArgs = {
  input?: Maybe<GetAllCorporationEinInput>;
};


export type QueryGetOneCorporationEinArgs = {
  input?: Maybe<GetOneCorporationEinInput>;
};


export type QueryGetPaginatedCorporationEinArgs = {
  input?: Maybe<GetPaginatedCorporationEinInput>;
};


export type QueryGetAllIrpRoadTaxesArgs = {
  input?: Maybe<GetAllIrpRoadTaxesInput>;
};


export type QueryGetOneIrpRoadTaxesArgs = {
  input?: Maybe<GetOneIrpRoadTaxesInput>;
};


export type QueryGetPaginatedIrpRoadTaxesArgs = {
  input?: Maybe<GetPaginatedIrpRoadTaxesInput>;
};


export type QueryGetAllIftaFuelTaxesArgs = {
  input?: Maybe<GetAllIftaFuelTaxesInput>;
};


export type QueryGetOneIftaFuelTaxesArgs = {
  input?: Maybe<GetOneIftaFuelTaxesInput>;
};


export type QueryGetPaginatedIftaFuelTaxesArgs = {
  input?: Maybe<GetPaginatedIftaFuelTaxesInput>;
};


export type QueryGetAllSubstanceComplianceClearinghouseArgs = {
  input?: Maybe<GetAllSubstanceComplianceClearinghouseInput>;
};


export type QueryGetOneSubstanceComplianceClearinghouseArgs = {
  input?: Maybe<GetOneSubstanceComplianceClearinghouseInput>;
};


export type QueryGetPaginatedSubstanceComplianceClearinghouseArgs = {
  input?: Maybe<GetPaginatedSubstanceComplianceClearinghouseInput>;
};


export type QueryGetAllDriverFilesArgs = {
  input?: Maybe<GetAllDriverFilesInput>;
};


export type QueryGetOneDriverFilesArgs = {
  input?: Maybe<GetOneDriverFilesInput>;
};


export type QueryGetPaginatedDriverFilesArgs = {
  input?: Maybe<GetPaginatedDriverFilesInput>;
};


export type QueryGetAllDotInfoArgs = {
  input?: Maybe<GetAllDotInfoInput>;
};


export type QueryGetOneDotInfoArgs = {
  input?: Maybe<GetOneDotInfoInput>;
};


export type QueryGetPaginatedDotInfoArgs = {
  input?: Maybe<GetPaginatedDotInfoInput>;
};


export type QueryGetAllAnnualVehInspStateRermitsArgs = {
  input?: Maybe<GetAllAnnualVehInspStateRermitsInput>;
};


export type QueryGetOneAnnualVehInspStateRermitsArgs = {
  input?: Maybe<GetOneAnnualVehInspStateRermitsInput>;
};


export type QueryGetPaginatedAnnualVehInspStateRermitsArgs = {
  input?: Maybe<GetPaginatedAnnualVehInspStateRermitsInput>;
};


export type QueryGetAllTrailerRentalArgs = {
  input?: Maybe<GetAllTrailerRentalInput>;
};


export type QueryGetOneTrailerRentalArgs = {
  input?: Maybe<GetOneTrailerRentalInput>;
};


export type QueryGetPaginatedTrailerRentalArgs = {
  input?: Maybe<GetPaginatedTrailerRentalInput>;
};


export type QueryGetAllYardRentalArgs = {
  input?: Maybe<GetAllYardRentalInput>;
};


export type QueryGetOneYardRentalArgs = {
  input?: Maybe<GetOneYardRentalInput>;
};


export type QueryGetPaginatedYardRentalArgs = {
  input?: Maybe<GetPaginatedYardRentalInput>;
};


export type QueryGetAllFinancedEquipmentArgs = {
  input?: Maybe<GetAllFinancedEquipmentInput>;
};


export type QueryGetOneFinancedEquipmentArgs = {
  input?: Maybe<GetOneFinancedEquipmentInput>;
};


export type QueryGetPaginatedFinancedEquipmentArgs = {
  input?: Maybe<GetPaginatedFinancedEquipmentInput>;
};


export type QueryGetAllAccountingArgs = {
  input?: Maybe<GetAllAccountingInput>;
};


export type QueryGetOneAccountingArgs = {
  input?: Maybe<GetOneAccountingInput>;
};


export type QueryGetPaginatedAccountingArgs = {
  input?: Maybe<GetPaginatedAccountingInput>;
};

export type ResetPasswordInput = {
  password: Scalars['String'];
};

export type RoleFilterFilter = {
  and?: Maybe<Array<RoleFilterFilter>>;
  or?: Maybe<Array<RoleFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type RoleResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  permits: Array<PermitsResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SignInInput = {
  unique: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  provider?: Maybe<Provider>;
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  lastname: Scalars['String'];
  firstname: Scalars['String'];
  username: Scalars['String'];
};

export type SimplifiedTenantResponse = {
  id: Scalars['ID'];
  code: Scalars['String'];
  name: Scalars['String'];
};

export type SolvedEntityResponse = {
  id: Scalars['ID'];
  entityName?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<EntityFieldsResponse>>;
};

export type StringFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  notLike?: Maybe<Scalars['String']>;
  iLike?: Maybe<Scalars['String']>;
  notILike?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
};

export type Subscription = {
  onCreateNotification?: Maybe<NotificationResponse>;
};


export type SubscriptionOnCreateNotificationArgs = {
  toUser: Scalars['String'];
};

export type SubstanceComplianceClearinghouseFilterFilter = {
  and?: Maybe<Array<SubstanceComplianceClearinghouseFilterFilter>>;
  or?: Maybe<Array<SubstanceComplianceClearinghouseFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  drugRandomEnrollment?: Maybe<StringFieldComparison>;
  reasonableSuspicious?: Maybe<StringFieldComparison>;
  clearingHouseLogin?: Maybe<StringFieldComparison>;
  clearingHousePassword?: Maybe<StringFieldComparison>;
  clearingHouseRegQueries?: Maybe<StringFieldComparison>;
  otherSubstanceRequest?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type SubstanceComplianceClearinghouseResponse = {
  id: Scalars['ID'];
  drugRandomEnrollment?: Maybe<Scalars['String']>;
  drugRandomEnrollmentDetail?: Maybe<Scalars['String']>;
  drugRandomEnrollmentExpiration?: Maybe<Scalars['DateTime']>;
  drugRandomEnrollmentFile?: Maybe<CloudFileResponse>;
  reasonableSuspicious?: Maybe<Scalars['String']>;
  reasonableSuspiciousDetail?: Maybe<Scalars['String']>;
  reasonableSuspiciousExpiration?: Maybe<Scalars['DateTime']>;
  reasonableSuspiciousFile?: Maybe<CloudFileResponse>;
  clearingHouseLogin?: Maybe<Scalars['String']>;
  clearingHouseLoginDetail?: Maybe<Scalars['String']>;
  clearingHouseLoginFile?: Maybe<CloudFileResponse>;
  clearingHousePassword?: Maybe<Scalars['String']>;
  clearingHousePasswordDetail?: Maybe<Scalars['String']>;
  clearingHousePasswordFile?: Maybe<CloudFileResponse>;
  clearingHouseRegQueries?: Maybe<Scalars['String']>;
  clearingHouseRegQueriesDetail?: Maybe<Scalars['String']>;
  clearingHouseRegQueriesFile?: Maybe<CloudFileResponse>;
  otherSubstanceRequest?: Maybe<Scalars['String']>;
  otherSubstanceRequestDetail?: Maybe<Scalars['String']>;
  otherSubstanceRequestFile?: Maybe<CloudFileResponse>;
  notes?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TaxesFilterFilter = {
  and?: Maybe<Array<TaxesFilterFilter>>;
  or?: Maybe<Array<TaxesFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  tax?: Maybe<StringFieldComparison>;
  taxType?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type TaxesResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  tax: Scalars['Float'];
  isActive: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum TenantCurrency {
  Usd = 'USD',
  Cop = 'COP',
  Eur = 'EUR'
}

export type TenantFilterFilter = {
  and?: Maybe<Array<TenantFilterFilter>>;
  or?: Maybe<Array<TenantFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  isActive?: Maybe<BooleanFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type TenantInfoInput = {
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  nit?: Maybe<Scalars['String']>;
  webSite?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  currency?: Maybe<TenantCurrency>;
  responsible?: Maybe<TenantResponsibleInput>;
  logoFile?: Maybe<Scalars['ID']>;
};

export type TenantInfoResponse = {
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  nit?: Maybe<Scalars['String']>;
  webSite?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  currency?: Maybe<TenantCurrency>;
  responsible?: Maybe<TenantResponsibleResponse>;
  logoFile?: Maybe<CloudFileResponse>;
};

export type TenantResponse = {
  id: Scalars['ID'];
  code: Scalars['String'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
  info?: Maybe<TenantInfoResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TenantResponsibleInput = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type TenantResponsibleResponse = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type TrailerRentalFilterFilter = {
  and?: Maybe<Array<TrailerRentalFilterFilter>>;
  or?: Maybe<Array<TrailerRentalFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type TrailerRentalResponse = {
  id: Scalars['ID'];
  unit: Scalars['String'];
  vin: Scalars['String'];
  tag: Scalars['String'];
  year: Scalars['String'];
  make: Scalars['String'];
  model: Scalars['String'];
  rentalDate: Scalars['DateTime'];
  rentalAmount: Scalars['Float'];
  file?: Maybe<CloudFileResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateAccountingInput = {
  entityId: Scalars['ID'];
  update: PartialAccountingInput;
};

export type UpdateAnnualVehInspStateRermitsInput = {
  entityId: Scalars['ID'];
  update: PartialAnnualVehInspStateRermitsInput;
};

export type UpdateClientInput = {
  entityId: Scalars['ID'];
  update: PartialClientInput;
};

export type UpdateCorporationEinInput = {
  entityId: Scalars['ID'];
  update: PartialCorporationEinInput;
};

export type UpdateDotInfoInput = {
  entityId: Scalars['ID'];
  update: PartialDotInfoInput;
};

export type UpdateDriverFilesInput = {
  entityId: Scalars['ID'];
  update: PartialDriverFilesInput;
};

export type UpdateFilesInput = {
  entityId: Scalars['ID'];
  update: PartialFilesInput;
};

export type UpdateFinancedEquipmentInput = {
  entityId: Scalars['ID'];
  update: PartialFinancedEquipmentInput;
};

export type UpdateIftaFuelTaxesInput = {
  entityId: Scalars['ID'];
  update: PartialIftaFuelTaxesInput;
};

export type UpdateIrpRoadTaxesInput = {
  entityId: Scalars['ID'];
  update: PartialIrpRoadTaxesInput;
};

export type UpdateMeInput = {
  username?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatarFile?: Maybe<Scalars['ID']>;
  profile?: Maybe<PartialProfileInput>;
};

export type UpdateNotificationInput = {
  entityId: Scalars['ID'];
  update: PartialNotificationInput;
};

export type UpdateRoleInput = {
  entityId: Scalars['ID'];
  update: PartialRoleInput;
};

export type UpdateSubstanceComplianceClearinghouseInput = {
  entityId: Scalars['ID'];
  update: PartialSubstanceComplianceClearinghouseInput;
};

export type UpdateTaxesInput = {
  entityId: Scalars['ID'];
  update: PartialTaxesInput;
};

export type UpdateTenantInput = {
  entityId: Scalars['ID'];
  update: PartialTenantInput;
};

export type UpdateTrailerRentalInput = {
  entityId: Scalars['ID'];
  update: PartialTrailerRentalInput;
};

export type UpdateUserAreaInput = {
  entityId: Scalars['ID'];
  update: PartialUserAreaInput;
};

export type UpdateUserInput = {
  entityId: Scalars['ID'];
  update: PartialUserInput;
};

export type UpdateUserPositionInput = {
  entityId: Scalars['ID'];
  update: PartialUserPositionInput;
};

export type UpdateYardRentalInput = {
  entityId: Scalars['ID'];
  update: PartialYardRentalInput;
};

export type UserAreaFilterFilter = {
  and?: Maybe<Array<UserAreaFilterFilter>>;
  or?: Maybe<Array<UserAreaFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  isActive?: Maybe<BooleanFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UserAreaResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserFilterFilter = {
  and?: Maybe<Array<UserFilterFilter>>;
  or?: Maybe<Array<UserFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
  username?: Maybe<StringFieldComparison>;
  verified?: Maybe<StringFieldComparison>;
  firstname?: Maybe<StringFieldComparison>;
  lastLogin?: Maybe<DateFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  profile?: Maybe<GraphQlFilterFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export enum UserGender {
  Male = 'MALE',
  Female = 'FEMALE',
  TransGender = 'TRANS_GENDER',
  NotSpecified = 'NOT_SPECIFIED'
}

export type UserPositionFilterFilter = {
  and?: Maybe<Array<UserPositionFilterFilter>>;
  or?: Maybe<Array<UserPositionFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  isActive?: Maybe<BooleanFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UserPositionResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserResponse = {
  id: Scalars['ID'];
  email: Scalars['String'];
  username: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstname: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
  isActive?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  roles: Array<SolvedEntityResponse>;
  profile?: Maybe<ProfileResponse>;
  avatarFile?: Maybe<CloudFileResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type YardRentalFilterFilter = {
  and?: Maybe<Array<YardRentalFilterFilter>>;
  or?: Maybe<Array<YardRentalFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type YardRentalResponse = {
  id: Scalars['ID'];
  truck: Scalars['String'];
  truckColor: Scalars['String'];
  tag: Scalars['String'];
  rentalDate: Scalars['DateTime'];
  rentalAmount: Scalars['Float'];
  file?: Maybe<CloudFileResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};
