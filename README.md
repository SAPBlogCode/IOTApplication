## Enablement of SAP IoT Service in Cloud Foundry environment on SAP Cloud Platform: -

Open [SAP Cloud Platform Cockpit](https://account.hana.ondemand.com/) and register yourself, if you have already registered then logon with your user credential. 

![Screenshot](images/SCP.png)

If you work in an enterprise account, add quotas to the services you purchased in your subaccount to make them visible on the Service Marketplace. If you don’t have any enterprise account, click on __‘Trial Home’__. It will navigate you to default global account __‘I/S/C Number + trial’__, add quotas to the services you purchased in your subaccount.

![Screenshot](images/GlobalAccount.png)

Click on button __‘New Subaccount’__. A popup will appear. Fill the details for new subaccount as shown in below screen shot and click button __‘Create’__.

![Screenshot](images/SubAccount.png)

A New subaccount is created. Click on newly created subaccount. Click on button __‘Enable Cloud Foundry’__. 

![Screenshot](images/EnableCloudFoundry.png)

There would be a popup for __‘Organization Name’__ which will have default name  __‘<Global account name>_<Subaccount name>__.

![Screenshot](images/CreateOrganization.png)  
  
On press button __‘Create’__, It will create a new Cloud Foundry Organization with filled name. Now click on button __‘Create Space’__.

![Screenshot](images/CreateSpace.png)

A dialog would be opened and enter details as per shown in below screenshot and press button __‘Create’__.

![Screenshot](images/CreateSpacePopup.png)

It will create a new Space with filled name and you can see newly added Space in __‘Space’__ section.

![Screenshot](images/IotApplicationDemoSpace.png)

Click on newly created Space. It will navigate to that space. You can see section __‘Service’__ tab in left side of page. This tab is having 3 sections – __Service Marketplace__ (SAP provided services for which user has taken subscription), __Service Instances__ (Instances created by user), __User Provided Services__.

![Screenshot](images/Services.png)

Click on first tab __Service Marketplace__. You can see tile for __‘Internet of Things’__ service, if you have subscription for this service. 

![Screenshot](images/ServiceMarketPlace.png)

Click on this tile, user can see documentation and Standard plans for this service. 

![Screenshot](images/IoTOverview.png)

Click on __‘Instances’__ in left most section and press button __‘New Instance’__ to create a new instance of IoT Service. A popup will appear.

![Screenshot](images/IoTInstances.png)

In first screen __(Choose Service Plan)__, select __‘standard’__ service plan and press button __‘Next’__. 

![Screenshot](images/ChooseServicePlan.png)

Next screen __(Specify Parameters)__ is optional, so just press button __‘Next’__. 

![Screenshot](images/SpecifyParameters.png)

Next screen __Assign Application)__ is also optional, so just press button __‘Next’__. 

![Screenshot](images/AssignApplication.png)

In last screen __(Confirm)__, Enter a suitable instance name and press button __‘Finish’__. 

![Screenshot](images/Confirm.png)

A popup will appear, press __‘OK’__. 

![Screenshot](images/InstanceCreationConfirmPopup.png)

A new IoT instance will be created. Sometimes it may take significant amount of time.

![Screenshot](images/InstanceCreated.png)

On click of newly created instance, user will be navigated to detailed page. 

![Screenshot](images/ReferencingApps.png)

Now create a service key for instance, for that select __‘Service Keys’__ in left most section and click on button __‘Create Service Key’__.

![Screenshot](images/ServiceKeys.png)

A popup will appear, enter an appropriate name for Service Key and press button __‘Save’__. 

![Screenshot](images/CreateServiceKey.png)

It will create a service key, which contains __instanceId__ (IoT instance Id), __cockpitUrl__ (IoT Cockpit URL), __username__ (Cockpit Username), __password__ (Cockpit Password). __Copy username and password, which will be required for IoT Cockpit Login screen__.

![Screenshot](images/ServiceKeyCreated.png)

Go to space __‘IoT Application Demo’__ and select tab __‘Service Instances’__ under section __‘Services’__ in leftmost part of page. Click on icon __‘Open Dashboard’__ in __‘Action’__ column of rightmost part of page as shown in below screenshot.

![Screenshot](images/ServiceInstances.png)

On click of icon __‘Open Dashboard’__, __Internet of Things Service Cockpit__ is opened in new tab. 

![Screenshot](images/IoTCockpitInitialScreen.png)

Enter username and password in login screen as mentioned in above step (you can find in below screenshot). 

![Screenshot](images/UserNamePassword.png)

Press button __‘Log On’__.

![Screenshot](images/IoTCockpitFilledInfo.png)


## Configuration of IoT things (Capability, Sensor Type, Sensor and Device) in IoT Service Cockpit: -

You can see Dashboard of __‘IoT Service Cockpit’__. 

![Screenshot](images/MyTenantsInitialScreen.png)

In left side toolbar, select __‘Tenants’__ tab and click on icon __‘+’__ in right side of page to add a new tenant.

![Screenshot](images/TenantsCreation.png)

A new screen will be opened for tenant creation. 

![Screenshot](images/TenantCreationInitialScreen.png)

Enter a suitable tenant name and press footer bar button __‘Create’__. 

![Screenshot](images/TenantFilledInfo.png)

A new tenant is added with auto generated unique __‘ID’__. Click on icon __‘+’__ to assign user to tenant. 

![Screenshot](images/MemberAdding.png)

Popup will open to add member. 

![Screenshot](images/AddMemberInitialScreen.png)

Enter user name as __‘root’__ and role as __‘User’__. Press button __‘Add’__. 

![Screenshot](images/AddMemberFilledInfo.png)

Click on tab __‘Tenants’__ under __‘User Management’__ Section. User can see newly added tenant and on click of tenant, user can see added users under __‘Members’__ section of tenant. 

![Screenshot](images/MemberAdded.png)

Select tab __‘My Tenants’__ under __‘User Management’__ Section, all the tenants would be listed here. 

![Screenshot](images/MyTenantWithCreatedTenant.png)

Click on tenant __‘IotApplicationTenant’__. It will navigate you to that tenant. Select __‘Device Management’__ tab from left side toolbar where you can see __Devices, Sensors, Sensor Types, Capabilities, Gateways__ etc. 

![Screenshot](images/DeviceManagement.png)

Select __‘Capabilities’__ under __‘Device Management’__, click on icon __‘+’__ to add a new capability. 

![Screenshot](images/Capabilities.png)

A new screen will be opened. Enter a suitable capability __Name, Alternate Id__ in __General Information section__ and click on icon __‘+’__ in __Properties section__ to add properties as per your requirement. Add property __Name and Data Type__ as shown in below screen. 

![Screenshot](images/CapabilityCreation.png)

Press footer bar button __‘Create’__. A confirmation popup will appear, click on button __‘Confirm’__. 

![Screenshot](images/CapabilityCreated.png)

Select __‘Sensor Types’__ under __‘Device Management’__, click on icon __‘+’__ to add a new sensor type. 

![Screenshot](images/SensorTypes.png)

A new screen will be opened. 

![Screenshot](images/SensorTypesCreation.png)

Enter a suitable sensor __Name, Alternate Id__ in __General Information section__ and click on icon __‘+’__ in __Capabilities section__. Add capability from drop down as shown in below screen. Press footer bar button __‘Create’__.

![Screenshot](images/SensorTypesFilledInfo.png)

A new Sensor Type is added. 

![Screenshot](images/SensorTypesCreated.png)

Select __‘Devices’__ under __‘Device Management’__, click on icon __‘+’__ to add a new device. 

![Screenshot](images/Devices.png)

A new screen will be opened. Enter a suitable device __Name, Gateway (REST), Alternate Id__ in __General Information section__. Press footer bar button __‘Create’__. 

![Screenshot](images/DeviceCreation.png)

A confirmation popup will appear, click on button __‘Confirm’__. Select tab __‘Sensors’__ under __‘IotApplicationDevice’__, click on icon __‘+’__ to add a new device. 

![Screenshot](images/Sensors.png)

A new screen will be opened. Enter a valid sensor __Name, Sensor Type, Alternate ID__ in __General Information section__. Press button __‘Confirm’__ in confirmation popup. 

![Screenshot](images/SensorCreation.png)

Select tab __‘Certificate’__ under __‘IotApplicationDevice’__, press button __‘Generate Certificate’__.

![Screenshot](images/DataVisualization.png)

Select __‘pem’__ in __Certificate Type__. Press button __‘Generate’__. 

![Screenshot](images/GenerateCertificate.png)

A file with name __‘<Device name>-device_certificate.pem’__ will be downloaded to browser default download location and a popup will appear with __Certificate Secret__. Copy secret key which will be required for data ingestion.

![Screenshot](images/CertificateGenerated.png)
  
__Curl Command for data ingestion__: - In MacBook curl command is already available. For windows you need to install curl command using link.
https://stackoverflow.com/questions/9507353/how-do-i-install-and-use-curl-on-windows
Open command prompt and go to the folder where pem certificate is downloaded. 

![Screenshot](images/CurlCommand.png)

Write command as shown.

![Screenshot](images/DataPushCommand.png)

Press __'Enter'__. You can see __status 202__ which is an indicator that data has been successfully ingested in IoT Cockpit.

![Screenshot](images/DataPushSuccessful.png)

Select tab __‘Data Visualization’__ under __‘IotApplicationDevice’__, select sensor name which is assigned to device. Click on segmented icon __‘Tabular data or Graphicaldata’__ on right most side of table toolbar.

![Screenshot](images/OneRecordInTabularForm.png)
![Screenshot](images/OneRecordInGraphicalForm.png)

Similarly, using curl command, you can push more data records and see it in tabular/graphical form as mentioned above steps.

![Screenshot](images/MultiRecordInGraphicalForm.png)
![Screenshot](images/MultiRecordInTabularForm.png)

Now click on __‘Tenant Information’__ tab, user can see all the created Devices, Sensors, Sensor Types, Capabilities and Gateways.

![Screenshot](images/TenantInfo.png)


## Setup connection between IoT Service and UI5 Application (Destination Creation): -

Now we will create a destination to consume IoT data in SAP UI5 application. Go to subaccount __‘ibso-iot-services-poc’__ and click on __‘Destination’__ under __‘Connectivity’__ section in leftmost toolbar of page. Click on __‘New Destination’__.

![Screenshot](images/DestinationCreation.png)

Create a new destination as shown in below screen shot.

![Screenshot](images/CredentialsScreen.png)

Press button __‘Save’__.

![Screenshot](images/NewDestinationAdding.png)

Click on button __‘Check Connection’__. 

![Screenshot](images/SuccessfulDestinationCreation.png)

It will show message: __Connection to {device} established. Response returned: “302: Found”__
  
![Screenshot](images/CheckConnection.png)


## SAP UI5 Application development consuming IoT data: -

Click on Services in leftmost menu of page as we did for service __‘Internet of Things’__. Select tile __‘SAP Web IDE Full-Stack’__ and enable service, if not already done and click on link __‘Go to Service’__. It will take you through SAP Web IDE portal, where we will develop SAP UI5 application. 

![Screenshot](images/Workspace.png)

Now right click on __‘Workspace’__ to create new UI5 application using standard template. 

![Screenshot](images/NewProjectCreation.png)

In tab __‘Template Selection’__, choose tile __‘SAPUI5 Application’__ and press button __‘Next’__. 

![Screenshot](images/TemplateSelection.png)

In tab __‘Basic Information’__, Give a suitable Project Name and Namespace and press button __‘Next’__. 

![Screenshot](images/BasicInfo.png)

In tab __‘Template Customization’__, Enter view name and press button __‘Next’__. 

![Screenshot](images/TemplateCustomization.png)

In tab __‘Confirmation’__, Press button __Finish’__.

![Screenshot](images/ProjectCreationCofirm.png)

User can see newly created UI5 application under __workspace__ folder.

![Screenshot](images/SuccessfulProjectCreation.png)

Open __neo-app.json__ file.

![Screenshot](images/InitialNeoApp.png)

Add highlighted code in neo-app.json so that UI5 application can connect to IoT data through created destination.

![Screenshot](images/UpdatedNeoApp.png)

Open __Main.view.xml__ file.

![Screenshot](images/InitialMainView.png)

Add code as shown in below screenshot to show table in UI5 application. 

![Screenshot](images/UpdatedMainView.png)

Open __Main.controller.js__ file.

![Screenshot](images/InitialMainController.png)

Add code as shown in below screenshot to get data IoT data. 

![Screenshot](images/UpdatedMainController.png)

Right click on project and press __Run -> Run as Web Application__. 

![Screenshot](images/LaunchingApp.png)

A Popup will appear, select __‘index.html’__ and press __‘OK’__. 

![Screenshot](images/IndexSelection.png)

A UI5 application will be loaded in new tab with IoT data as shown in below screen.

![Screenshot](images/SAPUI5App.png)