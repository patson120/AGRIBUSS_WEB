

export default function ListTable({object}){
	return(
		<>

				<div className="rounded-lg">
					<InputText
						onInput={(e) => {
							setFilter({
								...filter,
								global: {value:e.target.value, matchMode: FilterMatchMode.CONTAINS}
							})
						}}
						placeholder="Search a customer..."
					/>
					<DataTable 
						value={object} 
						sortMode="multiple" 
						filters={filter} 
						paginator
						rows={10}
						rowsPerPageOption={[3,6]}
						tableRecord={2}
						tableStyle={{ minWidth: '60rem' }}
						emptyMessage="No customer found."
						metaKeySelection={true}
						 dragSelection
					>
						<Column filter filterPlaceholder="Search by name" className="" field="id" header="Id" sortable/>
						<Column field="name" filterField="Name"  showFilterMenu={false} header="Name" sortable/>
						<Column field="region" filterField="Region"  showFilterMenu={false} header="Region" sortable/>
					</DataTable>
				</div>
		</>
	)
}